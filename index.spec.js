const server = require('./server.js');
const req = require('supertest');

describe('server', () => {
    it('Should have a server listening.', async () => {
        const res = await req(server).get('/');
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect(res.body).toEqual({message:'Server is listening.'});
    });

    describe.skip('Display a list of notes.', () => {
        it('Should return an object with key:value where value is an array of the notes.', async () => {
            const res = await req(server).get('/api/notes');
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual({notes:[
                {id:1,title: 'Costco', content: 'Costco Wholesale Corporation, trading as Costco, is an American multinational corporation which operates a chain of membership-only warehouse clubs.'},
                {id:2,title: 'Bath & Body Works', content:"An American retailer under the L Brands umbrella, along with Victoria's Secret. It was founded in 1990 in New Albany, Ohio and has since expanded across the United States, Canada, Chile and Peru."},
                {id:3,title: 'Forum Coffeehouse', content: 'A coffeeshop in the Kearny Mesa area of San Diego, California. They serve all types of coffee drinks, as well as food.'}
            ]});
        });
    });

    describe.skip('Create a note with a title and content.', () => {
        it('Should be able to add a note object.', async () => {
            const note = {
                title: 'HOB Coffee Company',
                content: 'Serves excellent small batch, craft coffee roasted locally here in San Diego, California. We want to share our passion for high quality coffee with our community in a unique, inviting experience.'
            }
            const res = await req(server).post('/api/notes').send(note);
            expect(res.status).toBe(200);
            expect(res.body).toEqual({id:4});
        });
    });

    describe('View an existing note.', () => {
        it('Should receive a note of the corresponding id.', async () => {
            const res = await req(server).get('/api/notes/1');
            expect(res.status).toBe(200);
            expect(res.body).toEqual({
                id:1,
                title: 'Costco',
                content: 'Costco Wholesale Corporation, trading as Costco, is an American multinational corporation which operates a chain of membership-only warehouse clubs.'
            });
        });
    });

    describe.skip('Edit an existing Note.', () => {
        it('Should change the note of corresponding id to the new body.', async () => {
            const note = {
                title: 'Amazon US',
                content: 'Merica'
            };
            const res = await req(server).put('/api/notes/5').send(note);
            expect(res.status).toBe(200);
            expect(res.body).toBe(1);
        });
    });

    describe.skip('Delete an existing note.', () => {
        it('Should delete the note of the corresponding id.', async () => {
            const res = await req(server).delete('/api/notes/5');
            expect(res.status).toBe(200);
            expect(res.body).toBe(1);
        });
    });
});