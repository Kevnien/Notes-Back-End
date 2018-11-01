# Notes-Back-End
    API
        set up to be deployed on https://knnotes.herokuapp.com/api/notes
        notes is set up with endpoint:'/api/notes'
        a note contains the properties: ID, title, content
        Get has the API return an object with one key:value pair where the value is an array of all stored notes in the database

        can post to the end point with a note object sans ID
        this API returns the ID that it assigned to the note that was posted

        can get a specific note by adding '/id' where the id is the id number of the note

        put with the id scheme will update the note when sending a full note to update it with

        delete can be used with the id scheme to delete a specific note