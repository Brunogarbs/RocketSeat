import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSupported = !!navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia == 'function'
&& typeof window.MediaRecorder == 'function'

type RoomParams = {
    roomId: string
}

export function RecordRoomAudio() {
    const params = useParams<RoomParams>()
    const [isRecording, setIsRecording] = useState(false)
    const recorder = useRef<MediaRecorder | null>(null)
    const intervalRef = useRef<NodeJS.Timeout>(null)

    function stopRecording() {
        setIsRecording(false)

        if(recorder.current && recorder.current.state != 'inactive'){
            recorder.current.stop()
        } 

        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
    }

    async function uploadAudio(audio: Blob){
        const formData = new FormData()

        formData.append('file', audio, 'audio.webm')

        const response = await fetch (`http://localhost:3333/rooms/${params.roomId}/audio`, 
            {
                method: 'POST',
                body: formData,
            })
        
        const result = await response.json()

        console.log(result)
    }

    function createRecorder(audio: MediaStream){
        recorder.current = new MediaRecorder(audio, {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 66_000,
        }) 

        recorder.current.ondataavailable = event => {
            if(event.data.size > 0){
                uploadAudio(event.data)
            }
        }

        recorder.current.onstart = () => {
            console.log('Gravaçao iniciada!')
        }

        recorder.current.onstop = () => {
            console.log('Gravacao pausada')
        }

        recorder.current.start()
    }

    async function startRecording(){
        if(!isRecordingSupported){
            alert('O seu navegador não suporta gravação')
            return
        }

        setIsRecording(true)

        const audio = await navigator.mediaDevices.getUserMedia ({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44_100,
            } 
        })

        createRecorder(audio)

        intervalRef.current = setInterval(() => {
            recorder.current?.stop()

            createRecorder(audio)

        }, 5000)
    }

    if (!params.roomId){
        return <Navigate replace to="/" />;
    }

    return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <Link to={`/room/${params.roomId}`}>
            <Button className="flex items-center gap-2" variant="secondary">
              <ArrowLeft className="mr-2 size-4" />
              Voltar à sala
            </Button>
          </Link>
        </div>
      </div>

      {/* Conteúdo centralizado vertical e horizontalmente */}
      <div className="flex-grow flex flex-col items-center justify-center gap-3">
        <h1 className="mb-6 text-center text-3xl font-semibold tracking-tight text-gray-100">
            Aperte o botão abaixo para gravar a aula!
        </h1>
        {isRecording ? (
          <Button onClick={stopRecording} className="flex items-center gap-2" variant="secondary">
            Pausar Gravaçao
          </Button>
        ) : (
          <Button onClick={startRecording} className="flex items-center gap-2" variant="secondary">
            Gravar audio
          </Button>
        )}
        <p className="mb-2 font-bold text-gray-100">
          {isRecording ? "Gravando..." : "Pausado"}
        </p>
      </div>
    </div>
  )
}