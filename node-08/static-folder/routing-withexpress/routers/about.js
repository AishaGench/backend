const express = require('express')
const router = express.Router()

/*router.get('/about', (request, response)=>response.send('HELLO ABOUT PAGE from GET request'))
    .post('/about', (request, response)=>response.send('HELLO ABOUT PAGE from POST request'))
    .put('/about', (request, response)=>response.send('HELLO ABOUT PAGE from PUT request'))
    .delete('/about', (request, response)=>response.send('HELLO ABOUT PAGE from DELETE request'))
    .all('/about', (request, response)=>response.send('HELLO ABOUT PAGE from ALL request'))*/
router.get('/about', (request, response)=>response.send('HELLO ABOUT PAGE from GET request'))
router.post('/about', (request, response)=>response.send('HELLO ABOUT PAGE from POST request'))
router.put('/about', (request, response)=>response.send('HELLO ABOUT PAGE from PUT request'))
router.delete('/about', (request, response)=>response.send('HELLO ABOUT PAGE from DELETE request'))
router.all('/about', (request, response)=>response.send('HELLO ABOUT PAGE from ALL request'))

module.exports = router;