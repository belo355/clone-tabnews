function status(request, response){
  response.status(200).json({chave: "primeiro endpoint"}); 
}

export default status; 