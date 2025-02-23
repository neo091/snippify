import { useLoaderData } from "react-router-dom";
import { Content } from "../Components/Content";
import { Brand } from "../Components/Brand";
import { SocialIcons } from "../Components/SocialIcons";
import { useState } from "react";
import { Title } from "../Components/Title";

export const loader = ({ params }) => {
  return { id: params.id }
}

const New = () => {

  const { id } = useLoaderData()
  const [copied, setCopied] = useState(false)

  const copyHandle = (e) => {

    const copy = e.target.innerText

    if (!copy) return;
    setCopied(true)
    navigator.clipboard.writeText(copy);

    setTimeout(() => {
      setCopied(false)
    }, 3000);

  }

  return (

    <Content>
      <Brand />
      <SocialIcons />
      <div className="text-center">
        <Title />
        <div className="relative group">
          <div className="opacity-0 top-0 transition-all duration-300 absolute group-hover:-top-12 left-0 right-0 group-hover:opacity-100">
            <p className="bg-gray-950 rounded p-2 w-fit m-auto text-gray-400  border-[1px] border-gray-800">{copied ? 'Copied!' : 'Click to Copy'}</p>
          </div>

          <div className="font-medium p-3 text-gray-400 border-gray-800 border-[1px] rounded bg-gray-950 hover:cursor-pointer" onClick={copyHandle}>
            {`${window.location.protocol}//${window.location.host}/${id}`}
          </div>
        </div>
      </div>
    </Content>

  );
}

export default New;