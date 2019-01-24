import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.sass']
})
export class QuillComponent implements OnInit {
  @ViewChild('editor') editor: ElementRef;
  @ViewChild('html') content: ElementRef;
  // @ViewChild('editor') editor: any;

  constructor(private el: ElementRef) { }

  config = { // TODO:
    // sanitize: true,
    config: [
      // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      // [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  data: any = {
    content: 'fuk'
  };

  ngOnInit() {
    console.log(this.editor);
    // this.editor.onEditorCreated( argu => {
    //   console.log('onEditorCreated', argu);
    // });
    // this.editor.onContentChanged( argu => {
    //   console.log('onSelectionChanged:', argu);
    // });
    // this.editor.onSelectionChanged( argu => {
    //   console.log('onSelectionChanged:', argu);
    // });

    // (this.editor as any).onContentChanged.subscript( argu => {
      console.log('onEditorCreated', (this.editor as any).onContentChanged);
    // });
  }

  editorCreated(argu) {
    console.log('onEditorCreated:', argu);
  }

  contentChanged(argu) {
    console.log('onContentChanged:', argu);
    // this.data.html = argu.html;
    this.content.nativeElement.innerHTML = argu.html;
  }

  selectionChanged(argu) {
    console.log('onSelectionChanged:', argu);
  }

  submit() {
    console.log(this.data.content);
  }

}
