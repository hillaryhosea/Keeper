import React  from "react";

import Header from "./header";

import Note from "./note";

import Footer from "./footer";

import notes from "./Notes";


function App (){
    return <div>
        <Header />
        {notes.map(noteItem => (
            <Note
             key = {noteItem.key}
            title = {noteItem.title}
            content = {noteItem.content}
            />
        ))}
            
           
        <Note />
        <Footer />
    </div>
}

export default App;


