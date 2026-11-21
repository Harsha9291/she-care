import axios from 'axios'
import Cookies from 'js-cookie'

// FETCHING TOKEN FROM COOKIE
export const token = Cookies.get('padkingoo_token')

export const noTokenPostRequest = async (props) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    )

    return response
  } catch (error) {
    if (error.response?.status === 401) {
      Cookies.remove('padkingoo_token')
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const putRequest = async (props) => {
  const token = Cookies.get('padkingoo_token')
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    )

    return response
  } catch (error) {
    if (error.response?.status === 401) {
      Cookies.remove('padkingoo_token')
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const getRequest = async (url) => {
  const token = Cookies.get('padkingoo_token')
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })

    return response
  } catch (error) {
    if (error.response?.status === 401) {
      Cookies.remove('padkingoo_token')
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const postRequest = async (props) => {
  const token = Cookies.get('padkingoo_token')
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}${props?.url}`,
      props?.cred,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    )

    return response
  } catch (error) {
    if (error.response?.status === 401) {
      Cookies.remove('padkingoo_token')
      console.error('Unauthorized: Redirecting to login page')
    }
    throw error
  }
}

export const noTokenGetRequest = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
      withCredentials: true,
    })
    return response
  } catch (error) {
    throw error
  }
}
