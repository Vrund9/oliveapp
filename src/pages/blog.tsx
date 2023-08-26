import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const getData = async () => {
    setLoading(true)
    const data = await fetch('https://potterhead-api.vercel.app/api/houses')
    setData(await data.json())
  }

  useEffect(() => {
    setLoading(false)
  }, [data])

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="container px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      {data && !loading && data?.map((list) => <div>{list}</div>)}
      {loading && !data && <div>Loading...</div>}
    </section>
  )
}

export default Blog