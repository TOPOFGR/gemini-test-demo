import { useEffect } from 'react'

const IFrame = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent<any>) => {
      console.log('event.origin', event.origin)

      // Make sure the message is from the expected origin
      if (event.origin !== 'https://expected-parent-domain.com') return

      // Handle the message
      console.log(event.data)
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <>
      <iframe
        src="https://a644-186-54-186-247.ngrok-free.app/chat/1GFrHuS"
        width="800"
        height="800"
        title="Child iframe"
        allow="publickey-credentials-get; publickey-credentials-create"
        allowFullScreen
      />
    </>
  )
}

export default IFrame
