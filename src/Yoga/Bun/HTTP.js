export const serveImpl = (options) => {
  const server = Bun.serve(options);
  return {
    stopForce: () => server.stop(true),
    stopGraceful: () => server.stop(false),
    upgrade: (req) => () => server.upgrade(req),
    port: server.port
  };
};

export const wsDataImpl = (ws) => ws.data;
export const setWsDataImpl = (ws, data) => { ws.data = data; };

// String/text Response
export const stringResponseImpl = (body, stuff) => new Response(body, stuff);

// JSON Response
export const jsonResponseImpl = (body, stuff) => Response.json(body, stuff);

// Empty Response (for 204 No Content, etc.)
export const emptyResponseImpl = (stuff) => new Response(null, stuff);

// Response with ArrayBuffer
export const arrayBufferResponseImpl = (buffer, stuff) => new Response(buffer, stuff);

// Static Response constructors
export const responseRedirectImpl = (url, status) => Response.redirect(url, status);

export const responseErrorImpl = () => Response.error();

// Response cloning
export const cloneResponseImpl = (response) => response.clone();

// URL search param (pure: URL constructor + searchParams.get)
export const searchParamImpl = (url) => (name) => new URL(url).searchParams.get(name);
