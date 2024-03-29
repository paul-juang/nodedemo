
//Print ledger accounts,Trialbalance and IncomeStatement
$(function() {
  let jsonarr = ["Ledger.json","trialBalance.json","incomeStatement.json", "balanceSheet.json",  "acctclass.json","acctdate.json"];
  async.map(jsonarr,function(json,callback) {
    /*$.getJSON(json, function(result) {
      callback(null,result);
    })*/
    fetch(json)
    .then(res => res.json())
    .then(data => callback(null,data))
    .catch(err => callback(err))      
  },
  function(err,result) {
    if (err) {
      console.log(err)
    }
    let acctObj = result[0];
    let trialBalance = result[1];
    let incomeStatement = result[2];
    let balanceSheet = result[3];
    let acctclass = result[4];
    let objarr = result[5];
    let dateperiod = getDate(objarr);
    console.log("dateperiod: ",dateperiod)
    console.log("ledger: ", acctObj)
    console.log("trialBalance: ", trialBalance);
    console.log("incomeStatement: ", incomeStatement);
    console.log("balanceSheet: ", balanceSheet);
    console.log("acctclass: ", acctclass);
    console.log("objarr: ", objarr);
   //printLedgerAcct(acctObj,dateperiod);
   printTrialBalance(trialBalance,dateperiod)
   // printIncomeStatement(incomeStatement,dateperiod);
   //printBalanceSheet(balanceSheet,dateperiod);
  })
  function getDate(objarr) {
    let begdate = objarr[0].date;
    let yyyyb = begdate.substr(0,4);
    let mmb = begdate.substr(5,2);
    let ddb = begdate.substr(8,2);
    begdate = yyyyb + "/" + mmb + "/" + ddb;
    let enddate = objarr[objarr.length-1].date;
    let yyyye = enddate.substr(0,4);
    let mme = enddate.substr(5,2);
    let dde = enddate.substr(8,2);
    enddate = yyyye + "/" + mme + "/" + dde;
    return begdate + " - " + enddate;  //至
  }

  function printLedgerAcct(acctObj,dateperiod) {
    $("<a>").attr({id:"return",title:"返回首頁"})
    .css({color: "rgb(0,0,255)"})
    .text("\u21B6").appendTo('body');
    $("#return").on("click",function() {
      $(this).attr("href","/home")
    })
    let date = dateperiod;
    $("<h5>").text("日期: " + date).css({textAlign: "center"})
    .appendTo('body');
    $("<h4>").text("總帳目表").css({textAlign: "center"})
    .appendTo('body');  
    $("<br>").appendTo('body');

    
    for (let i in acctObj) {

      $("<h5>").text("科目: " + i + '  ' + acctObj[i][0].acctname).css({textAlign: "center"})
      .appendTo('body');
      $("<table>") .css({width:"50% important",margin:"auto"})
      .append($("<thead>")  .css({textAlign:"center",fontWeight:"bold"}) 
        .append($("<tr>")
          .append($("<th>").text("日期")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"}) 
          .append($("<th>").text("借")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})    
          .append($("<th>").text("貸")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"}) 
          )
        )
      .append($("<tbody>").attr({id:function() { return "tbody" + i }}))
      .appendTo('body');
      let id = "#" + "tbody" + i;
      let tbody = $(id);
      acctObj[i].forEach(function(obj) {
        let dr = "";
        let cr = "";
        if (obj.dr) {
          dr = formatAmount(obj.dr);
        }
        if (obj.cr) {
          cr = formatAmount(obj.cr)
        }
        let color = "";
        if (obj.date === "結餘" ) {
          color = "blue";
        }
        $("<tr>").css({textAlign:"center"})                        
        .append($("<td>")   
         .append($("<input>") .attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",color:color}).prop("readonly",true)
                   .val(obj.date))
         )
        .append($("<td>") 
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",color:color}).prop("readonly",true)
                   .val(dr))
         )
        .append($("<td>")
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",color:color}).prop("readonly",true)
                  .val(cr))
         )              
        .appendTo(tbody);
      })
      $("<br>").appendTo('body');
    }
  }

  function printTrialBalance(trialBalance,dateperiod) {
    $("<a>").attr({id:"return",title:"返回首頁"})
    .css({color: "rgb(0,0,255)"})
    .text("\u21B6").appendTo('body');
    $("#return").on("click",function() {
      $(this).attr("href","/")
    })
    let date = dateperiod;
    $("<h5>").text("日期: " + date).css({textAlign: "center"})
    .appendTo('body');
    $("<h4>").text("試算表").css({textAlign: "center"})
    .appendTo('body');   
    $("<br>").appendTo('body');
    $("<table>").css({width:"100% !important",margin:"auto"})
    .append($("<thead>").css({textAlign:"center",fontWeight:"bold"})  
      .append($("<tr>")
        .append($("<th>").text("科目")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"}) 
        .append($("<th>").text("借")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"}) 
        .append($("<th>").text("貸")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"}) 
        )
      )
    .append($("<tbody>").attr({id:"tbody"}))
    .appendTo('body')
    trialBalance.forEach(function(obj) {
      let dr = "";
      let cr = "";
      if (obj.drttl) {
        dr = formatAmount(obj.drttl);
      }
      if (obj.crttl) {
        cr = formatAmount(obj.crttl);
      }
      let color = "";
      if (obj.acctname === "總計" ) {
          color = "blue";
        }
      $("<tr>").css({textAlign:"center"})                       
      .append($("<td>")  
       .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:color}).prop("readonly",true)
                    .val(obj.acctname))
       )
      .append($("<td>") 
        .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:color}).prop("readonly",true)
                    .val(dr))
        )
      .append($("<td>")
       .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:color}).prop("readonly",true)
                    .val(cr))
       )              
      .appendTo($("#tbody"));
    })
    $("<br>").appendTo('body');
    $("<br>").appendTo('body');
   }


   function printIncomeStatement(incomeStatement,dateperiod) {
    $("<a>").attr({id:"return",title:"返回首頁"})
    .css({color: "rgb(0,0,255)"})
    .text("\u21B6").appendTo('body');
    $("#return").on("click",function() {
      $(this).attr("href","/home")
    })   
    let date = dateperiod;
    $("<h5>").text("日期: " + date).css({textAlign: "center"})
    .appendTo('body');
    $("<h4>").text("損益表").css({textAlign: "center"})
    .appendTo('body');   
    $("<br>").appendTo('body');
    $("<table>").css({width:"50% important",margin:"auto"})
    .append($("<thead>").css({textAlign:"center",fontWeight:"bold"})
     .append($("<tr>")
      .append($("<th>").text("科目")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})
      .append($("<th>").text("借")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})    
      .append($("<th>").text("貸")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})
      )
     )
    .append($("<tbody>").attr({id:"tbodyi"}))
    .appendTo('body');
    incomeStatement.forEach(function(acctsobj) {
      for (let i in acctsobj) {
       if (i !== "本期損益") {
         $("<tr>").css({textAlign:"center"})                       
         .append($("<td>")  
           .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
            .val(i))
           )
         .append($("<td>") 
          .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
            .val(""))
          )
         .append($("<td>")
           .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
            .val(""))
           )              
         .appendTo($("#tbodyi"));
         acctsobj[i].forEach(function(obj) {
          let dr = "";
          let cr = "";
          if (obj.drttl) {
            dr = formatAmount(obj.drttl);
          }
          if (obj.crttl) {
            cr = formatAmount(obj.crttl);
          }
          $("<tr>").css({textAlign:"center"})                       
          .append($("<td>")  
           .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px"}).prop("readonly",true)
            .val(obj.acctname))
           )
          .append($("<td>") 
            .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px"}).prop("readonly",true)
              .val(dr))
            )
          .append($("<td>")
           .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px"}).prop("readonly",true)
            .val(cr))
           )              
          .appendTo($("#tbodyi"));
        })
       }//end of if
       else {
         acctsobj[i].forEach(function(obj) {
          let dr = "";
          let cr = "";
          if (obj.drttl) {
            dr = formatAmount(obj.drttl);
          }
          if (obj.crttl) {
            cr = formatAmount(obj.crttl);
          }
          $("<tr>").css({textAlign:"center"})                       
          .append($("<td>")  
           .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
            .val(obj.acctname))
           )
          .append($("<td>") 
            .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
              .val(dr))
            )
          .append($("<td>")
           .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
            .val(cr))
           )              
          .appendTo($("#tbodyi"));
         }) // end of forEach
         $("<br>").appendTo('body');
         $("<br>").appendTo('body');
       }// end of else
      } //end of for loop
    })// end of forEach
  }


  function printBalanceSheet(balanceSheet,dateperiod) {
    $("<a>").attr({id:"return",title:"返回首頁"})
    .css({color: "rgb(0,0,255)"})
    .text("\u21B6").appendTo('body');
    $("#return").on("click",function() {
      $(this).attr("href","/home")
    })
    let date = dateperiod;
    $("<h5>").text("日期: " + date).css({textAlign: "center"})
    .appendTo('body');
    $("<h4>").text("資產負債表").css({textAlign: "center"})
    .appendTo('body');   
    $("<br>").appendTo('body');
    $("<table>").css({width:"50% important",margin:"auto"})
    .append($("<thead>").css({textAlign:"center",fontWeight:"bold"})

     .append($("<tr>")
      .append($("<th>").text("科目")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})
      .append($("<th>").text("借")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})    
      .append($("<th>").text("貸")).css({textAlign:"center",fontSize:"0.9em",fontWeight:"bold"})
      )
     )
    .append($("<tbody>").attr({id:"tbodyb"}))
    .appendTo('body');
    balanceSheet.forEach(function(acctsobj) {
      for (let i in acctsobj) {
       $("<tr>").css({textAlign:"center"})                       
       .append($("<td>")  
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
          .val(i))
         )
       .append($("<td>") 
        .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
          .val(""))
        )
       .append($("<td>")
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
          .val(""))
         )              
       .appendTo($("#tbodyb"));
       acctsobj[i].forEach(function(obj) {
        let dr = "";
        let cr = "";
        if (obj.drttl) {
          dr = formatAmount(obj.drttl);
        }
        if (obj.crttl) {
          cr = formatAmount(obj.crttl);
        }
        $("<tr>").css({textAlign:"center"})                       
        .append($("<td>")  
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px"}).prop("readonly",true)
          .val(obj.acctname))
         )
        .append($("<td>") 
          .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px"}).prop("readonly",true)
            .val(dr))
          )
        .append($("<td>")
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px"}).prop("readonly",true)
          .val(cr))
         )              
        .appendTo($("#tbodyb"));
              })
      }//end for in acctsobj
   })
       let gttldr = 0;
       let gttlcr = 0;
       balanceSheet.forEach(function(acctsobj) {
          for (let i in acctsobj) {
            acctsobj[i].forEach(function(obj) {
               if (obj.drttl) {
                gttldr += obj.drttl;
               }
               if (obj.crttl) {
                gttlcr += obj.crttl;
               }
            })
          }
       })
       let cdr = formatAmount(gttldr);
       let ccr = formatAmount(gttlcr);
       $("<tr>").css({textAlign:"center"})                       
       .append($("<td>")  
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
          .val("總計"))
         )
       .append($("<td>") 
        .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
          .val(cdr))
        )
       .append($("<td>")
         .append($("<input>").attr({type:"text",class:"flex"}).css({textAlign:"center",fontWeight:"bold",fontSize:"14px",color:"blue"}).prop("readonly",true)
          .val(ccr))
         )              
       .appendTo($("#tbodyb"));
       $("<br>").appendTo('body');
       $("<br>").appendTo('body');
    
  }
  function formatAmount(n) {
     return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }  
  
})

