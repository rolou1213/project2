const Store = require('../models/stores');

module.exports = {
    index,
    show,
    create,
    createReview:createReview,
    new: newStore,
    
  };

  function index(req, res) {
    Store.find({}, function(err, stores) {
      res.render('stores/index', { title: 'All Stores', stores });
    });
  }
  function show(req, res) {
    Store.findById(req.params.id, function(err, store) {
      res.render('stores/show', { title: 'Store Detail', store});
    });
  }
  
  function create(req, res) {
    const store = new Store(req.body);
    store.save(function(err) {
      if (err) return res.redirect('/stores/new');
      res.redirect('/stores');
    });
  }
  
  
async function createReview(req,res){
    console.log(req.body)
    let store= await Store.findOne({_id:req.params.id})
    let reviewObj={
      text:req.body.content,
      rating:req.body.rating,
    }
    store.reviews.push(storeObj)
    await store.save()
    res.redirect('/stores/'+store.id)
    
  }

  function newStore(req, res) {
    res.render('stores/new', { title: 'Add Store' });
  }