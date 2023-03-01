
const Hi = () => {
  const body = JSON.stringify({
    message: 'cloudflare goes brrrrrrrrrrrrrrrrrrr',
    status: "super-200"
  });
  const headers = { 'Content-type': 'application/json' };
  return new Response(body, { headers });
};

export default Hi;