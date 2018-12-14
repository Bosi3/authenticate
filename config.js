module.exports = {
  development: {
    port: process.env.PORT || 3000,
    saltingRounds: 10
  }
}
//a salt is random data that is used 
//as an additional input to a one-way function that "hashes" data, 
//a password or passphrase
//module.exports = mongoose.model('User', userSchema);