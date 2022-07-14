
const fs = require('fs');

const express = require('express');

const router = express.Router();

const TreeLayout = require('../models/treedata');
   


//for agk menu
router.get("/treedata",function(req, res) {  
 res.render("treedata_s");
});

router.get("/getdata",function(req, res) {
  TreeLayout
  .find({})
  .select('_id name parent idx date') 
  .exec()
  .then(function(results){  
    let json = JSON.stringify(results);    
      fs.writeFile('testData.json', json, 'utf8', function(err,result){ 
        if(err) {
          console.log(err);
          res.send('error in get document');  //send to client
        }else
          res.send({treedatas: results});  //send to client
        });
    })  
  .catch(function(err){
   console.log(err);
       res.send('find error');  //send to client
     })
});

router.post('/treedata', function(req, res) {   
  
  let newname = req.body.name;
  let newparent = req.body.parent;
  let newidx = req.body.idx;
  let newdate = req.body.date;
  let newItem = new TreeLayout({
    name: newname,
    parent: newparent,
    idx: newidx,
    date: newdate
  });

  newItem.save()
  .then(function(result){
    res.send('success in save');
  })
  .catch(function(err){
    let error = new Error('save error');
    console.log(error);
    res.send('error in save');
  }) 
  
});


router.put('/treedata/:id', function(req, res) {

  let id = req.params.id;
  let newname = req.body.newname;
  let newparent = req.body.newparent;
  let newidx = req.body.newidx;
  let newdate = req.body.newdate;
  
  TreeLayout.updateOne({_id:id}, {$set: {name: newname, parent: newparent, idx: newidx, date: newdate}})
  .exec()
  .then(function(result){
    res.send('success in update')
  })
  .catch(function(err){
   console.log(err)
   res.send('error in update')

 })

});

//delete
router.delete('/treedata/:id', function(req, res) {

  let id = req.params.id;
  
  TreeLayout.deleteOne({_id:id}).exec()
  .then(function(result){
    res.send('delete success')
  })
  .catch(function(err){
   console.log(err)
   res.send('delete error')

 })
  
});

router.get("/agkdraw",function(req, res) {
  res.render("agkdraw");
});

router.get("/drawtree",function(req, res) {
  res.render("drawtree_s");
});

module.exports = router;
