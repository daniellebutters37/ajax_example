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
                // get the element we want to add the preloader too, and pass it to the preloader function
                this.addPreloader(document.querySelector('.modelInfo'));
                //trigger an ajax call with a mocked click event
                document.querySelector('#F55').click();

            },

            beforeUpdate : function(){
                console.log('things are going to change...');
            },

            updated : function() {
                console.log('things are different now');
                // move the preloader out of the element and hide it
                let preloader = document.querySelector('.preloader-wrapper');
                // move it to the bottom of the page - ready for the next ajax call
                setTimeout(function(){
                    preloader.classList.add('hidden');
                    document.body.appendChild(preloader);  
                }, 1000); 
                
            },

            methods : {
                addPreloader(parentEl) {
                    //load the preloader into the parent elements and it it draw
                    let preloader = document.querySelector('.preloader-wrapper');

                    parentEl.appendChild(preloader);

                    let animItem = bodymovin.loadAnimation({
                        wrapper : document.querySelector('.preloader'),
                        animType : 'svg',
                        loop : true,
                        path : 'data/search.json'
                    })
                },

                fetchData(e) {
                    // trigger the preloader
                    this.addPreloader(document.querySelector('.modelInfo'));
                    let preloader = document.querySelector('.preloader-wrapper').classList.remove('hidden');
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
