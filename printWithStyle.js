module.exports = function(data){


  const headers = data.headers;
  const path = data.originalUrl;
  const body = data.body;

  console.log(`








************************************************************
------------------------------------------------------------
# REQUEST ORIGIN: ${path}
------------------------------------------------------------
# BODY:
${JSON.stringify(body)}
------------------------------------------------------------
# METHOD: ${data.method}
------------------------------------------------------------
# HEADERS:
${Object.keys(headers).map( key =>{
  if(key == "cookie") return "";
  else return key+": "+headers[key]
}).join("\n")}
-----------------------------------------------------------
************************************************************
  `);


}
