(() => {
    //rewokr this with a vue instance
        const vm = new Vue({
            el : "#app",
            data : {
                modelname : "",
                modelpricing : "",
                modeldetails : "",

            },

            mounted : function(){
                console.log('view is ready to go on the page');
                //trigger an ajax call with a mocked click event
                document.querySelector('#F55').click();

            },

            beforeUpdate : function(){
                console.log('things are going to change...');
            },

            update : function() {
                console.log('things are different now');
            },

            methods : {
                fetchData(e) {
                    // debugger;
                    let targetURL = e.currentTarget.id; // gets the id of the element via the event object
                    
                    fetch(`./includes/connect.php?modelNo=${targetURL}`) //go get the data and bring it back! good doggy
                    .then(res => res.json()) // turn the result into a plain JS object
                    .then(data => {
                        console.log(data);
                        const {modelName, pricing, modelDetails} = data[0];

                        this.modelname = modelName;
                        this.modelpricing = pricing;
                        this.modeldetails = modelDetails;
                        //run a function to parse our data
                        // showCarData(data[0]); //run a function ot put the data on the page
                    })
                    //let see what we got
                    .catch(function(error) {
                        console.log(error); // if anthing broke, log it to the console
                    });
                }
            }
        });

})();
