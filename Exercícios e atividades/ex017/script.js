var data = new Date()

document.write(data.getDate() + '/')
document.write((data.getMonth() + 1) + '/')

document.write(data.getFullYear() + '<br><br><br>')

document.write(data.getHours() + ':')
document.write(data.getMinutes() + ':')
document.write(data.getSeconds() + ':')
document.write(data.getMilliseconds())

var b = new Date()

console.log(b.constructor)