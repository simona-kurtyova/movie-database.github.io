"use strict";(self.webpackChunkmovie_database=self.webpackChunkmovie_database||[]).push([[197],{2197:(x,u,o)=>{o.r(u),o.d(u,{SelectedMediumModule:()=>C});var s=o(6895),c=o(22),e=o(8256),a=o(2799),l=o(2871);const m=function(i,d,t){return{red:i,yellow:d,green:t}};function p(i,d){if(1&i&&(e.TgZ(0,"div",3)(1,"div",4),e._UZ(2,"img",5),e.qZA(),e.TgZ(3,"div",6)(4,"h1",7),e._uU(5),e.qZA(),e.TgZ(6,"div",8)(7,"div",9)(8,"span",10),e._uU(9),e.qZA(),e._uU(10," \u2022 "),e.TgZ(11,"span",10),e._uU(12),e.qZA(),e._uU(13,"\u2022 "),e.TgZ(14,"span",10),e._uU(15),e.qZA()(),e.TgZ(16,"div",11)(17,"span",12),e._uU(18),e.qZA(),e.TgZ(19,"span",13),e._uU(20),e.qZA()(),e.TgZ(21,"h2",14),e._uU(22,"Overview"),e.qZA(),e.TgZ(23,"span",15),e._uU(24),e.qZA()()()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("src",t.selectedMedium.poster,e.LSH),e.xp6(3),e.Oqu(t.selectedMedium.title),e.xp6(4),e.hij("",t.selectedMedium.media_type.toUpperCase()," "),e.xp6(3),e.AsE("",t.selectedMedium.release_date," (",t.selectedMedium.original_language.toUpperCase(),")"),e.xp6(3),e.Oqu(t.selectedMedium.status.toUpperCase()),e.xp6(2),e.Q6J("ngClass",e.kEZ(10,m,t.selectedMedium.popularity<4,4<=t.selectedMedium.popularity&&t.selectedMedium.popularity<7,7<=t.selectedMedium.popularity)),e.xp6(1),e.hij(" \u2b50",t.selectedMedium.popularity," "),e.xp6(2),e.hij("-",t.selectedMedium.tagline,""),e.xp6(4),e.Oqu(t.selectedMedium.overview)}}function r(i,d){if(1&i&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij("",t.selectedMedium.number_of_seasons," season")}}function M(i,d){if(1&i&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij("",t.selectedMedium.number_of_seasons," seasons")}}function g(i,d){if(1&i&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij("",t.selectedMedium.number_of_episodes," episode")}}function _(i,d){if(1&i&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij("",t.selectedMedium.number_of_episodes," episodes")}}function v(i,d){if(1&i&&(e.TgZ(0,"div",16)(1,"div",4),e._UZ(2,"img",5),e.qZA(),e.TgZ(3,"div",6)(4,"h1",7),e._uU(5),e.qZA(),e.TgZ(6,"div",8)(7,"div",9)(8,"span",10),e._uU(9),e.qZA(),e._uU(10," \u2022 "),e.TgZ(11,"span",10),e._uU(12),e.qZA(),e._uU(13," \u2022 "),e.YNc(14,r,2,1,"span",17),e.YNc(15,M,2,1,"span",17),e._uU(16," \u2022 "),e.YNc(17,g,2,1,"span",17),e.YNc(18,_,2,1,"span",17),e._uU(19," \u2022 "),e.TgZ(20,"span",10),e._uU(21),e.qZA()(),e.TgZ(22,"div",11)(23,"span",12),e._uU(24),e.qZA(),e.TgZ(25,"span",13),e._uU(26),e.qZA()(),e.TgZ(27,"h2",14),e._uU(28,"Overview"),e.qZA(),e.TgZ(29,"span",15),e._uU(30),e.qZA()()()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("src",t.selectedMedium.poster,e.LSH),e.xp6(3),e.Oqu(t.selectedMedium.title),e.xp6(4),e.hij("",t.selectedMedium.media_type.toUpperCase()," "),e.xp6(3),e.hij("(",t.selectedMedium.original_language.toUpperCase(),")"),e.xp6(2),e.Q6J("ngIf",1===t.selectedMedium.number_of_seasons),e.xp6(1),e.Q6J("ngIf",1!=t.selectedMedium.number_of_seasons),e.xp6(2),e.Q6J("ngIf",1===t.selectedMedium.number_of_episodes),e.xp6(1),e.Q6J("ngIf",1!=t.selectedMedium.number_of_episodes),e.xp6(3),e.Oqu(t.selectedMedium.status.toUpperCase()),e.xp6(2),e.Q6J("ngClass",e.kEZ(13,m,t.selectedMedium.popularity<4,4<=t.selectedMedium.popularity&&t.selectedMedium.popularity<7,7<=t.selectedMedium.popularity)),e.xp6(1),e.hij(" \u2b50",t.selectedMedium.popularity," "),e.xp6(2),e.hij("-",t.selectedMedium.tagline,""),e.xp6(4),e.Oqu(t.selectedMedium.overview)}}const f=[{path:"",component:(()=>{class i{constructor(t,n){this.selectedMediumService=t,this.mediumDataService=n}ngOnInit(){this.idAndTypeOfSelectedMedium=this.selectedMediumService.getIdAndMediaType(),this.idAndTypeOfSelectedMedium&&this.mediumDataService.getSelectedMediumData(this.idAndTypeOfSelectedMedium.id,this.idAndTypeOfSelectedMedium.media_type).subscribe(t=>this.selectedMedium=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.W),e.Y36(l.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["selected-medium"]],decls:3,vars:2,consts:[["id","selectedMedium"],["id","movie",4,"ngIf"],["id","tv",4,"ngIf"],["id","movie"],[1,"firstPart"],["alt","poster",1,"poster",3,"src"],[1,"secondPart"],[1,"title"],[1,"aboutMediaContent"],[1,"firstLine"],[1,"aboutMedia"],[1,"secondLine"],[1,"aboutMedia","popularity",3,"ngClass"],[1,"aboutMedia","tagline"],[1,"overviewTitle"],[1,"aboutMedia","overview"],["id","tv"],["class","aboutMedia",4,"ngIf"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,p,25,14,"div",1),e.YNc(2,v,31,17,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.idAndTypeOfSelectedMedium&&n.selectedMedium&&"movie"===n.idAndTypeOfSelectedMedium.media_type),e.xp6(1),e.Q6J("ngIf",n.idAndTypeOfSelectedMedium&&n.selectedMedium&&"tv"===n.idAndTypeOfSelectedMedium.media_type))},dependencies:[s.mk,s.O5],styles:["#selectedMedium[_ngcontent-%COMP%]{margin:2em}#movie[_ngcontent-%COMP%], #tv[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto auto}.poster[_ngcontent-%COMP%]{width:22em;margin-right:2.5em;border-radius:1em}.secondPart[_ngcontent-%COMP%]{margin-top:-2em}.title[_ngcontent-%COMP%]{display:block;margin-bottom:-.1em;font-size:4em;font-weight:400}.aboutMediaContent[_ngcontent-%COMP%]{margin-top:1em}.firstLine[_ngcontent-%COMP%], .secondLine[_ngcontent-%COMP%]{display:block;margin-bottom:2em}.aboutMedia[_ngcontent-%COMP%]{font-size:1.4em;margin:0 .5em}.popularity[_ngcontent-%COMP%]{margin-right:-.2em}.red[_ngcontent-%COMP%]{color:#ca1d1d}.yellow[_ngcontent-%COMP%]{color:#f6da09}.green[_ngcontent-%COMP%]{color:#4a885a}.tagline[_ngcontent-%COMP%]{font-style:italic;color:#a7acac}.overviewTitle[_ngcontent-%COMP%]{font-weight:bolder;color:#dee1e1;margin-top:2em}.overview[_ngcontent-%COMP%]{margin:0}@media only screen and (max-width: 1220px){.title[_ngcontent-%COMP%]{font-size:3em}}@media only screen and (max-width: 900px){#selectedMedium[_ngcontent-%COMP%]{text-align:center}#movie[_ngcontent-%COMP%], #tv[_ngcontent-%COMP%]{display:table}.overviewTitle[_ngcontent-%COMP%]{font-weight:bolder;color:#dee1e1;margin-top:.5em}}"]}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(f),c.Bz]}),i})(),C=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.ez,Z]}),i})()}}]);