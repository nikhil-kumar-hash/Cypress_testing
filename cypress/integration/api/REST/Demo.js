describe('HTTP example', () => {
    
    it('GET', () => {

        cy.request({
            method : 'GET',
            url : 'https://httpbin.org/get'
        
        }).then((res) => {
            
            expect(res.body).have.property('url')

        });
    })

    it('POST', () => {

        cy.request({
            method : 'POST',
            url : 'https://httpbin.org/post',
            body : {
                "name" : "Nikhil",
                "age" : 23
            },
            headers : {
                'content-type': 'application/json'
            }
        
        }).then((res) => {
            
            expect(res.body).have.property('json');
            expect(res.body.json).to.deep.equal({
                
                "name" : "Nikhil",
                "age" : 23

            });
        
        });
    })

    it('PUT', () => {
        cy.request({
            method : 'PUT', 
            url : 'https://httpbin.org/put',
            body : {
            "name" : "Nikhil"
            }
        }).then((res) => {
            expect(res.body).to.have.property('json');
            expect(res.body.json).to.deep.equal({"name" : "Nikhil"});
        });
    })


    it('PATCH', () => {
        cy.request('PATCH', 'https://httpbin.org/patch',{
            "name" : "Nikhil"
        }).then((res) => {
            expect(res.body).to.have.property('json');
            expect(res.body.json).to.deep.equal({"name" : "Nikhil"});
        })
    })

});