type Method = 'GET' | 'POST';

const sendHttpRequest = async (method: Method, endpoint: string, data?: any) => {
  const url = `http://mbezcen.ru/${endpoint}`;

  const response = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const responseError = await response.json();
    const error = new Error('fetch/sendHttpRequest failed');
    // error.data = responseError;
    throw error;
  }

  return response.json();
};

// https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript
// https://stackoverflow.com/questions/35192841/how-do-i-post-with-multipart-form-data-using-fetch
