import app from './server'
app.listen(app.get('PORT'),()=>console.log('server at running: '+app.get('PORT')))
