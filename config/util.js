const crypto = require('crypto')
const bcrypt = require('bcrypt')

exports.hash = async (text, secret) => {
 return await bcrypt
            .hash(
                crypto.createHmac('sha256', secret)
                    .update(text)
                    .digest('hex')
                    .split('a')
                    .reverse()
                    .join('x'), 12)
}
