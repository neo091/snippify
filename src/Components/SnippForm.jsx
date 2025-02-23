import { useState } from "react";

import isURL from "validator/lib/isURL";
import { Title } from "./Title";
import { useNavigate } from "react-router-dom";
import { create } from "../services/service";

export const SnippForm = () => {

  const navigate = useNavigate()
  const [errorUrl, setErrorUrl] = useState(false)
  const [errorMessage, setErrorMessage] = useState('invalid URL or Malformed')
  const [url, setUrl] = useState('')

  const handle = (e) => {
    e.preventDefault()

    let contador = null

    if (isURL(url) && url.length > 5) {
      clearTimeout(contador)
      setErrorUrl(false)
      setUrl('')
      submitHandle()
    } else {
      setErrorUrl(true)
      setErrorMessage('invalid URL or Malformed')
      contador = setTimeout(() => {
        setErrorUrl(false)
      }, 4000);

    }
  }

  const submitHandle = async () => {

    await create({ url }).then(response => {
      if (response.error) {
        setErrorUrl(true)
        setErrorMessage(response.body.message)
        const contador = setTimeout(() => {
          setErrorUrl(false)
        }, 4000);
        return;
      }
      const { id } = response.body
      navigate(`/New/${id}`)
    })
  }

  return (
    <>
      <div className="text-center relative">

        <Title />

        <form onSubmit={handle} method="POST" >

          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} name="url" className="bg-white text-gray-700 w-[300px] p-2   h-[50px] text-lg rounded outline-indigo-800 outline-8 placeholder:font-bold font-medium z-10" placeholder="You LOOONG url" />

          <button className=" absolute h-[50px] w-[80px] bg-snippify font-semibold text-white ml-[-80px] rounded-e">snip</button>

        </form>

        <div className="relative">
          <div className={`font-bold p-3 text-red-600  rounded bg-red-300 absolute transition-all duration-300  ${errorUrl ? ' opacity-100 top-4' : 'opacity-0 top-8'} w-full`}>{errorMessage}</div>
        </div>

      </div>
    </>
  )
}