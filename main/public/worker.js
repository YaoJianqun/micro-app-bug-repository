importScripts('http://localhost:5173/utils.js')

onmessage = function (event) {
  console.log(`主线程接收: ${event.data}`)

  const result = performComplexCalculation()

  postMessage(result)
}
