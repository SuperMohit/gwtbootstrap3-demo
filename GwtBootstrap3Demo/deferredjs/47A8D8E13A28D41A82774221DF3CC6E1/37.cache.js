function gmc(){}
function Xlc(a,b,c){ikb.call(this,a,b,c,(g$b(),f$b))}
function pmc(a){var b;if(!a.i){b=new emc(new gmc);a.i=b}return a.i}
function omc(a){var b;if(!a.g){b=new Xlc(rjb(Okb(a.b)),pmc(a),nmc(a));Jjb((Pkb(a.b),b),$kb(Pkb(a.b)));a.g=b}return a.g}
function emc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;Ckb(this,(a=new oFb,jyb(a,(b=new XAb(CDc),jyb(b,(c=new jEb,c.b='Project Setup',iEb(c),c.c='basic setup and using custom themes',iEb(c),c)),jyb(b,(d=new rEb,jyb(d,(i=new DEb,CEb(i,(j=new UBb(3),j.c=DDc,SBb(j),j)),i)),jyb(d,(k=new uEb,jyb(k,new HCb((n=new Xqb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new RZ(n.b.b)).b)),jyb(k,(o=new Zrc,fFb(o,(p=new Xqb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new RZ(p.b.b)).b),o0(o.ab,GDc,true),o)),k)),d)),jyb(b,(e=new rEb,jyb(e,(q=new DEb,CEb(q,(r=new UBb(3),r.c='Bootstrap2 Look-a-like Setup',SBb(r),r)),q)),jyb(e,(s=new uEb,jyb(s,new HCb((t=new Xqb,t.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new RZ(t.b.b)).b)),jyb(s,(u=new Zrc,fFb(u,(v=new Xqb,v.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new RZ(v.b.b)).b),o0(u.ab,GDc,true),u)),s)),e)),jyb(b,(f=new rEb,jyb(f,(w=new DEb,CEb(w,(x=new UBb(3),x.c='Custom Theme',SBb(x),x)),w)),jyb(f,(y=new uEb,jyb(y,new HCb((z=new Xqb,z.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new RZ(z.b.b)).b)),jyb(y,(A=new Zrc,fFb(A,(B=new Xqb,B.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new RZ(B.b.b)).b),o0(A.ab,GDc,true),A)),y)),f)),jyb(b,(g=new rEb,jyb(g,(C=new DEb,CEb(C,(D=new UBb(3),D.c='Support for IE8',SBb(D),D)),C)),jyb(g,(E=new uEb,jyb(E,new HCb((F=new Xqb,F.b.b+='For support for IE8 you need to inherit the Respond module into your *.gwt.xml.',new RZ(F.b.b)).b)),jyb(E,(G=new Zrc,fFb(G,(H=new Xqb,H.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n',new RZ(H.b.b)).b),o0(G.ab,GDc,true),G)),E)),g)),b)),a))}
NY(1302,526,Lxc,Xlc);NY(1305,531,Mxc,emc);NY(1306,1,{},gmc);NY(1313,1,lyc);_.wb=function Fmc(){rmb(this.c,omc(this.b.b))};var iU=lpb(YCc,'SetupPresenter',1302),kU=lpb(YCc,'SetupView',1305),jU=lpb(YCc,'SetupView_BinderImpl',1306);syc(Em)(37);