import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Content } from '../Components/Content'
import { Brand } from '../Components/Brand'
import { SocialIcons } from '../Components/SocialIcons'
import { findSnip } from '../services/service'

export const loader = ({ params }) => {
  return { id: params.id }
}

const View = () => {

  const loader = useLoaderData()
  const [id, setId] = useState(null)

  const getSnip = async (id) => {
    await findSnip({ id }).then(result => {

      const { error, body } = result
      if (error) {
        return;
      }

      var meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'refresh');
      meta.content = `0;url=${body.url}`;
      document.getElementsByTagName('head')[0].appendChild(meta);

    })
  }

  useEffect(() => {
    if (loader.id) {
      setId(loader.id)
      getSnip(loader.id)
      //var meta = document.createElement('meta');
      //meta.setAttribute('http-equiv', 'refresh');
      //meta.content = "0;url=https://www.youtube.com/watch?v=CBxXOW81Rjs&list=PL_0BB1yzZzOe3BtdAcMhchJqbP33mAVBh";
      //document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [])

  return (
    <Content>
      <Brand />
      <SocialIcons />
      <div>View : {id}</div>
    </Content>
  )
}

export default View