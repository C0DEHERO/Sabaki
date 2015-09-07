exports.Command = require('./command.js')
exports.Response = require('./response.js')

var alpha = 'abcdefghjklmnopqrstuvwxyz'

exports.vertex2point = function(tuple, size) {
    return tuple.unpack(function(x, y) {
        return alpha[x] + (size - y)
    })
}

exports.point2vertex = function(point, size) {
    var x = alpha.indexOf(point[0].toLowerCase())
    var y = size - parseInt(point.substr(1))
    return new Tuple(x, y)
}
