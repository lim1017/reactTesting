import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

// console.log(wrapped.find("textarea").length);

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});



describe('the text area', ()=>{

  beforeEach(()=>{
    const textArea = wrapped.find("textarea");
    textArea.simulate("change", { 
      target: { value: "new comment" } 
    });
    wrapped.update();
  })

  it("can type in text area", () => {
    
  
    //cant used textArea variable because it is referencing the OLD area
    expect(wrapped.find("textarea").prop('value')).toEqual("new comment");

  
  });

  it("can submit and show empty text area", ()=>{
     //submit form
     wrapped.find("form").simulate("submit");
     wrapped.update();
   
     expect(wrapped.find("textarea").prop('value')).toEqual("");
  })


})



