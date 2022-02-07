import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditForm from '../components/ui/editForm'
import httpService from '../service/http.service'

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null)
  const id = useParams().id
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`

  const handleSubmit = async (data) => {
    try {
      await httpService
        .put(qualityEndPoint, data)
        .then((res) => console.log(res.data.content))
    } catch (error) {
      console.log('Expected error')
    }
  }

  useEffect(async () => {
    const { data } = await httpService.get(qualityEndPoint)
    setQuality(data.content)
  }, [])

  return (
    <>
      <h1>Edit Quality Page</h1>{' '}
      {quality !== null ? (
        <EditForm data={quality} onSubmit={handleSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default EditQualityPage
