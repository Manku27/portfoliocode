import React, { Component } from 'react';

class Me extends Component {
  render() {
    return(
      <div className="aboutdiv">
        
        <img src="https://media.tenor.com/images/2cc478d8413886a55803dfaf06aaea2b/tenor.gif" alt="kenobi"
        className="aboutdiv-img"/>
        <br/>
        <br/>
        <p>I am a nerd. But i was'nt always like this...</p>
        <p>This is my story, if you are reading this ...</p>
        <img src="https://media1.giphy.com/media/gXTndOLdVWMdW/200.gif" alt="tzone"
        className="aboutdiv-img"/>
		
		<br/>
		<p>I'm not going to mush about how hard life has been. This "blog" is not about me.</p>
		<p>It's for kids like me, who wanted to learn stuff and have a chill life but life had other plans.</p>
		<p>Navigating this mess of an education system can be difficult all by yourself</p>
		<img src="https://thumbs.gfycat.com/ResponsibleWhimsicalBlackbird-small.gif" alt="kaki"  
    className="aboutdiv-img"/>
		<p>I know, feeling inadequate, helpless, feeling everyone else is better than you and you know nothing.</p>
		<p>But...</p>
		<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFRgVFxgYFRYXGBcVFRcXFhUVFRgYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEIQAAEEAAQDBQYCCQIFBQEAAAEAAgMRBBIhMQVBUQYTImFxMoGRobHRwfAUIzNCUnKSsuFDghUkYnPxFlNjotIH/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQMAAgQFBv/EACURAAICAgMAAgMAAwEAAAAAAAABAhEDIQQSMSJBBRNRFGGRcf/aAAwDAQACEQMRAD8AxEz8rSegtZjFYhziC4k/IelLV8awhDa62T6N1WTnZR19yEFQotiw5P8A5VczMvMgjUeSbcOaKQnFG60NzorWSg17M2hrqetG9veFFuECHmbbr9NfTdWxYrV2xA6b3VlKFok7CDkrcOygpQyWAdrU1V2MVHWqS41dVGNirLI5SEygId6/VKgFdE8jYX5K0Z0XeG1ot4kWuYRmaOhNbjWvI6Us9JGQdQRzAO9JvNhWvNkZSdfU8wfNWzRBrAysw0t2xrcNHkFJZFZswcLI42kJGLuXmiWsBJFAaED3a6+fJe7w5Mh5Gx5dULHrE0DgK1gRMDGZaN5jsb0Fciod3W6o5GvFjJwJrCdEJhMMSjJRWiyZWm6PR8DHKMez8JyRZguQRUdVbhtlHEyUk2/DoPHG+4RGVObZDwu0tTkmGVVrZeTS2JMTurOHtBdqqZnarkMlFbK+J5/sllthvFiL0Soo0gvKGljoow0qKcq5y7rw42chQe8lcpE4KK3AFXdLZlTnP42UNgJTDDsa0ezrVFG4qBrRognBCOSzPyeP1dMmWsAoNHv1QrcGwcyDpr5jW1cCokq6kzBlgmg9kllBY/Cve/IHOojxbZaOoHw/BdhkcPRRfiCDoCb81oWRM5ssEo7AMdw7L4AwWDea9xWorlv8kA7DEGiKKdxw6knnvZtWOYDuFO4txoz/AOjlOuyEBE7tP9J39zFc1gGwTXs839af5D/c1RTZUQ8X4rmceg8I925WcxcwLhzXJLQ4bqmeBG0GLrbRUvfnePFR6nb5JcXalXYQ+LW0CUFRvLSWHYn3edK1jg1poan6nQe5ekiDwCPT/KY4ThtgadPkgBKwe6jde4Iy6kUQR09EWJgb8v8AyEXjeH6DTmhZWAbcwPkgydLJsOikFZhIr0RLsEQlSNWKOgUKQcRqN11zK3UGu8yB5JZ0MOK2MMA2/ESjcWwFpvohuGEHw39kwxUYqhZ0WHJfY9pxljWJRX8MjM3VRaNDpr1RM8eqswrddQD6/VbFLRwpYbnoEa1XNGuqf/8ADW+0avoNlacA0kWlPImao8aUWtAODkAC5Lrqj5Ymt2CWyuWe7Z3IJxhTCMOdFRiTZU43UFUT4kF6Xk9UWE01ASyIucFDiAlNhSMHKcpPqgRyhaukbRVRCcjlTWw7AvA3Q2INlVgojDRWQhVOxqm8kVjOQYIu5I7D8PcCmcLAAqsViMqT+2TdI3vh4oRuQFMDeqv7phZ5oeV9m1FrSUzq2cl5Ixk9WUPGqlDCXcl57NURBOGjZMbdaMMYQlK5eAzhlUWDmuyvsqTdkyJzuQ14vDyjakVBraV0c+RJNOzv7U/yH+5qVpp2d/an+Q/3NV0LMbjg1uiTPOp9VfjJSSVTE204hBoVsIOYoiLDGrXcHHciAR3wrD+EWE4bMGkKnBRU0oTGuooELcdxDUDqfwQjHGzYNj6ISbNbeadYKAEA+W3kqstEngRRvr9ExkxApVdxXpul+KsFLkbcC+gmVoKolYA1EYSGxZXsRAktpncwY3j9+xfFdpxFMctKvAYUblG4iIUss5puju8fBKMLv0SztvVWcPZ4kQ9oI81RBGb0V3K0Jxw6zT9G4Nq0nzVUTDShi8RkpZ6s6cmkrZHGSABLY5QDZXMRMXm1DuTp5p0MetmHLyX2+P0TdNYrzUqvUIYsIF+dK2B9IyhrRMXIfb5B4YCNVyamt0XJnVSjObCSvTo5KUW16K5SqiFfIxVZVrR5/Im2caE64ZCKtLIISU5wgpvXrXL1Ssr1SNfDgovtIsmmDQkuIxGYozFztOhGvXp7kK7DeKhR0verRxwrZXl8i31XhfhIg7mfgjnQUFPg+Hy6uHu6JliowRohKbUii48JwtembxJQ9ovFxUUGU5OziZ4OLOOCsadFF79F6MJiOfnST0SXCurhV0YJHk07O/tT/If7mpU41y+iZdnJf1xH/Qf7mq6Qm9nzqYam11jqoI3FNBABsgm2nQgXy6j5oB8ZB1CamROxk+cUAieFQZnWk4KfcDfSjLI0UTaFIHHYU2KR41V8YOXQ6oBEseDJI8kwwUGXTlaLY0arzjRVGMiqK3zZdCleMltx+KI4j9UNHhia9Etm7D6GQY4NAGVHRtDxYNXuEqdhSOqZYOMhvqsuR9Uek4cXnkr+gyHD0aGqtnaKXcMNF1zbKyfZ2n/AHufIKyCEXqFyeWirIXWi5MCwpbLzFSRcTPjr0H5+K0fJIcY4GQ1RAAVsS+QnNL4MqEYqlJev7LlrWYbR5zbQndEH6I1zSNxXRVSy0W+toS8DFxbu9EsSdB6L0JsUpTkO2KqjaQVlOwpKW07R3FxaIIRpw9ltQ7YaV4z0Zs/G7TtHcCylTjJKcav3I4YprW1l5b+aWiaiTlB9b0Rgrdi88koKCByfMrgHn9UbDCXlTdg/FSY5paMq405LsEcLLt7KbByowsNBdB8Syylbs6WPGox6kOJwgi/JZ541Whx79Pcs9iH0tWLw89+RXzIq5CiUIlp0WhHAy+nkJicVRoK+WWtBufkqnYYHnqmRRimCunDt2fj8Ef2Tf/zDwDp3buV65mfRATRZdEZ2P/bur/23f3MV0JXpnsObaW7EE+78lXwt7xpJGoOU+vVQ4i2i14BGZtH1Ar4/ZHYdrCMzQASASL+iKYL+xc/DUFzBYgtKtxslWlrHaqww2ODx16BOsGDXL/HksDhpyDQta/gsttJvoPkgQZEH09f8KExAFq4uv1QuMOioxsGBOdZ5Gk0hYCAaSNktO5an8E7wUlj0S2bcMkXd2CdlZLBVKh01FXsmzBY860en/F5KdFkJpRlkpctUzLKdpJWDGyUXFpqdgo4eJe4kcrD50Pz8Fb10TJNQi2Lcbji705D7pX/xDLJRGhG/mTorJHoHGwk+Ibj5rdCCSPLZeTNz7WaaOZuXLX7gd6k2TXnopRiNuvTrrXLTz1+qF4ZJ3sAIa3Yt8VgtIJ1BG412KvbC45XHIXUNDeUiro+8q1Cv2f8Av+zksmcF2UgN5mtRzqj5LP8AE8Ue8yjcEfOjXzT7iOMMbHPkog6U2hvoGt6aWsrg2kuzuG5PvJs/DdFR+wPkNR6ocMlRmGkvQpaCr4HJeSFo08PlShNMdtbohpSjGatvyQjxqsS9PVXcWLpF2KIlGDBklHwwABNeRJaMEeO27kVYaKgiI47KjSvhSWza/jGkXVohbooiZ2iS46Yoxg2ZZ8iONbJ8SxF6BJMQ5F5rXJ8IataoNR0cXPjnnbnFC8K+SfI2yflZVOVC4zEBxFtutN/wWmKs89n06Ivxwu8rtDfIfdX4fGO3LaB89fol3iJGml1pQ9Fc8610TTFNjOZpeNDV8unqUw7JwBsrhVHIb1v95iUYGainfZ19zu/7Z/uYihQi4iB3du03A52dwfl80v4U/NbSaA1+KYPxDiMriHNPI0fnuEKMEBTo7JF5m8y0711r87KC1VUK8cXNe9pN0479OXyXsO8HQ7/VMcdCJ295H7bRTm8zX596Sgqw5O0OcLGC+lqeGjKD7lmOENLjmAJF8tVpYtlAlr+I06r0+irxeKsFJeJtN30UBPbNTSqSLCZL3CacIlPiHp+KX8NdmHyT3CQgaqkjViezklojCuXJ3BU4eRZs0bR3vx2brMInlXYZL0Qkz7KvwW6zuFROtj5TlmoPYKBJ5JBxDFl7vLkOgTXjM+VmUc/oN/wWbe5WwQv5CfyXJp9ERmdQJ6C/gqIcQHeR6fZHYPDd6/u9RpbiOTR+JNBGca4LTGGBniaaoak3z89vmnvIlLqc+PElPG8n8AOF4ow5m1bHHNv7J5+417lqGCFpFuc4cidGgH3W74j1WZj4XiDoYi0/zN+O+i9NwyZu7HHnp4vpdJujmym1o9xudsj8rSTG1xIsgknYe4D5k8qQGJ9knmNR6hTIS/G4om2VXXz56eStRRTt7DcJig8dDzH2RkRSjhk1eGtzfy/wmjSqyRoxypmiwb7j9NEO321Dhk+7Tz+qLZH4lzprrJns+HkWTEmFxM0UnBSY1TdFoqFnLYDJKBuqDiiToqsZ7RVcbwFohiVWzByeW03FB3fUNUvxclqEs6rYbKb4jlSyOcqJYcahGz1l9yXzvo0FJ85DbKr+vs7G/wCb/jQlAGlaCcvxQOIwtDZXQPrxHT4KOLx7CND8lriqPN5p9m2L42j1rXfn+Ck8qlk7Qbzb7jKVGbEgkC9PTRXMU07DcLEXan3LS9nMNUxP/wAZ/uaknDXixW3Va3gTm95/sP1aikUSMUyPy08lzUfH80qIpdLrXpe3xVjje/yUFUcfG4HO3Q8+WYfdLuJ4X/UAoE6joTzHkiG4pg5kj0I+PJeOKZWXdh3aQaHpSJaNphnY8e3voW/jqteI2u3GvX7rFxcQYygx1Acg2vw1TRvaBhbqTfkD9lC6dsI4vCGgk7E7pMMIXNsUByB0vzHL4qON4yHgtur50fcFCDiTS2idRpsfcQgHYx4S0tdTgQehWkYa+Cy0fFIy0BzjY2OU/A+SOi43HXtH+k/ZBofCYdi5dVLDnMlruJxH94/0u+yJw3FIG/vH+l32SpQbN3HzqMrYY9tKzDPopdiONwnZx/pd9lGDi8N6uI/2u+yU8baqjoR5WOOTsmNMdC6V45MGl/Wvp7lm+JlzDkogn6eXqno47B/Ef6XfZVYbiWGfKJJHGmatGRx15E6cqtWUXCPgJ5oZsluS2OOz3C+5ht/tv8T75Dk33fUo8Gv5jsOg8/xS3EdpsOdMziLs+B2tagDTrSr/APUWHAvMST/0O36bbJKxybtodyeZFQ/XBqhsdNNyfn5noFwmtNST8/PyA/EJUO0WHFnOSf5Ha9AOgXGdo8ONS83zOV1eg02TOr/hy3OP9IdpMEO77z94EZj1B0+RpYfidZh1rX46fitRxrtLE+NzWk0a3aRdEH3bfJYt2KBJcef5Cfji62JnJdtBnDD4/cfwTcFZ7DYsB4JOmx9CnOHxUbjRcQOZykqzQY5N+h8ElFaLByh4B58/VI24nCAe071p32VEfF443+F5I5eE6jodFlzYnLw7nA/IRwupPTNnGr7Wei7TYcj2iP8Aa77KGI7SQ8nGv5XfZZY453TR1snLwV2U1/1FnEatLC42pTcYhd+8f6XfZUv4hDXtH+ly2xg6OBn5MXLTJEqOakOOIxXq4/0lXN4rD/Ef6T9kejMr5CW0zwBtU8VxRFNDeV3y6Ih/FYf4j/Sfsh8Ri4HtovII1Byu+2oTIxoy5M3Z22I5sQeeqpEhOisxLm8j8j+KFbMmUIcrGEODJVc+DLURhcYBuT7hr/hFyyNfRAoHmTr0R8EymWcGZVArR8GxLRMW3r3ZP/2Ysm7FlujAR1J39w5Jp2P/AG55/q3a+eZili++9GXjl6Gj7qRuHLzr4a/PRUO8VeyP9ov5Kx2C8PhcQRy5H0PJAq6FhF80Xw7h0s7iyJhe4Nc8gVYY3VztTsECG+oKZcB4i7D4mGcFw7uRrjloksvxtAOhtpcKOhtXGg+Kwr4i0SNLc7GyNutWP1a4VyIXsNE55IYC4hrnkDkxjS97vQAE+5a/B9soGOxJ7lxbJM97G0wB8LoJIIsLML0jjzsIrN7OwNED9o+1cU+HZGwTMm7yGR7vDQMeFZhpAwh1myzPrV5jfUwlGPk62FEHXkF9Ff8A/wBEjM+LkySZZCzuLZE50cbc5kgc0nLkeZCSddWgkHYIODdoe4wT8Ox8jHvxDZC9oaR3QjdG+MEkHMcwPTwN16QItbw6TvTBkuUOLS1pa7UGiczSW5R/FdDquyYWRj5I3tIkiLmyAeLIYzlfmLbFA89l9Kk7R4V+HllZKIjJNNK6Ko85Y7EQyd2WNlB70iPK1+VzQwuBIvQDGduopHSOrEjvYsXE5wLA8NxGJGIhAOfUMbmZrsHadFCGEDgN9EzHBpzF3zWXH3bpc2eP9nG8RvfWa6DyGkVdlGdneMYfB4sy1LJGIgG1lDxI5sbnA6t8IcHtsEGq3Fgl8Q7Y4Z0UsbI5m5oMZE0ZYw1pxWLbiY9n6BoblNe7ohRazJtaXODG6ucQ1rRuS40AB1JTTG8CxEDC+WPI1r8hPeRHx01xAyuOag5tkWBdEg6Jt2f7XMjw2HiyPaYZg95Y2MiXLiGz5w4kObJlBj22A8QFtJs3bNjmgO/SDT8c4OJaXRnGfsZYvH+0jFjce26nDdSiyZjM10BqTQAGpN7UBurWCvCdHa2OYrQgjqNlr5O3jS5j4myRgY79JewZAHxAwHu8wNhxdCXnSs0rt+dXE+00UmGmga2ZzpJTIHvygjNIx57wteQ/RlAFpI0pwGiqxsZUjK5xe40814SDqPLXktxw3thh448Izuprw5BcajcHXBJE9rbeAGlz2u2F5dbOpTcQ7TGTBfo78zpSXGSTKwiUmVsjZHOvM2QNbk0BsAeICwZRRsz/AHg3safklVOBcx0gosZlzeJuheSG0CbPsnYGq1pbtnauHD4bBMc0YmosO58eaMsidBiZZDepImLHRtogCtydgJh+28DXNLmTuyvwTi8iPPL+iOe6V8vj0fI14Zu7SNtk7ApFWzCC3WRqALJGzQSGguOwFuAs8yOqhxLASYeV0MzckjCA5tg1YBGrSQdCFu8d2xjmjmjAxI77Ctgc8ZA4vixMkzC7x0WlkndnmA3Yg0DOI9sIZBOGxPZ3spebZC8vYY4WBsmYkBzHREtIDva/dNlWK2fL0zwZ8IW8x/bWBxnPdS/rYe7rbxf81RB70mNt4hvhPeN8JpjfDlxgOGAIj/SL1y5+6r2m5c2U37PeXXPLytBhTD8NwLEvMeWEnvWOkjOZjQ5jDT3ZnOAABIFmtdEmxJFjXVbHAdqI44GRN78ObgsThiW5AO8xE3fNePHeVtkddB7qMDx0QcPc1wY8icCJmcZu7kr9KbIzlG5rGtBPOR9c6BezJRTAcx8Uww2EdK9kbBbnuDWCwMznaNALiBqfNao9vIHSFxjmyEOOao+8zfpjMXDHWau7jax0QN7SOIAGio4F2thhxOJnLJQJZ2yxlmQSMa3ECd0R1oNe3wOo8hoRYQcdjceV000ZeZuRzmu0c0kOFjQtNH5qeHgdIC5jS8Nc1pyjN4n5sjaGpJyO26LWN7cwNLP1MlNlieWju8oEeKkxD5m+L9rIx4icNqvUigqmdsGnHYXFNE5ETHxy3la94c+csIpxBLWT5QD/AAAXroaFSmZEYaR8ckrG3HEWZ3W3w94crNCbIJ0sBVcNw808ohibmkdZDbaCcoLjq4gbAlbPs1xVuBM7yZntkkgeCC3O5sMpkcyW3AHvAcrt/aPtbHmF7dwNOE/UujbD7ccbI8ubup488biQfEZgSKGxsu0qKhfazFTB8eXPXjYJG+Jp8Lro+EmjodDr5LrJB1HxW1wXbWBrMoifm/RsNCXlkTi4wNlbIxzXOru3iVpvU2wW12lew/bpoMRkicS2B7JHinO78xNgjxMbSRqI4wCLabkk1GisQxYhc/MWgEMYZHeJo8AIBIsjMbcNBZ8kG09FpcL2gYJcdI8SD9KiexmRrBle6Vkgkc0FrWkZD7P8Z95fbvtRDjchY2UFs07xnDABHN3ZZGC1xNNLHabeM7c4VZkwUZHNUfXrz580E6jyCZYJjcg8IvXl5oMXLwl3zdsw9Ofw5Jp2JlBnde/du+GZiALmH/SaDzOUWm/ZKu/d4Rfdu5f9TEEUjVmUw5s1def3CLLJWjcH4hKgCmWFxJrXcfMKMtJC8ea6wDqV7zXHGlYuSkFb6qNdF0gFVnQqEOuvop5ApAgqGUjzChC+GWt7RDX3sgA61IeRQCgxwQ74yTSnHP1/PqiGqF1TOtAaK5BCYjEa0rMXJQQCgbGGEIsk1Q+qm/GdB7ygoyar8/nVSCFBci39Id1TvhvCJ5Ye+DWujLnsvO288bO8c0t3By1XUkAarPlp/hPwTLDcaMWEmw7M7XTSxvcSQGhsPijyCrEmcnxXtQpGkVtjPE9j8Y0kGNhADif1sVAxythkaTm9pj5GNI5ZgdtV6PsZii4NDI8zppIGt76LO6WF4ZK1rM1uykgmhtqhH9tsaX5zIyy2RpHcxZXd85skr3My5S9z2MeXVu0KqftbiZHse90ZLJZZm/qYq7zEftXEZdc2m+1CkQWNmdk8UGySFg7uJ1SOa5rvZDHSZBYzFrXtsaa2NwaL4/2cbho5XmYuLcZNhY2gM1EBbmfJ4raSHaAA1Qv2gQoxHarEzZu+cyQl/eDPDE8sdlYw92XNJYC2NgNb5Qd7Knje0mIlBEhjdmfLIf1MX7SduWV+jdHEAG+RaCKIUAK5GqjLRV2croQCkdJK48WCOvku2uE0oXAZMI4baqzuyALRah3nJQnhFrNEZgmgO1QtLsOJDSCSg0Vl4NHTF2Zh9x8uiSYvCFpRUvFW2S1pvYE7fBBzYxz9z8ApQv70ei03XXy+SpJvdepENnSoErpBXAoA4EywmjB7/ql1hH4aTwCm2db181GVn4WGSjvp5/gnfY+e5zQ/0ncx/ExI3Gun59ycdjT/AMw7/tO/ujVUBLZkQ5WB9Uql6lcuFtgbVgn5LpibXNURSEaclJzkAMsigb8NN/gVOSBtVRvlqKtDh/NW97fJAGyh0Jb7QIU2t00J/BTc+9FE4c719EbDZ1kTSaOjuim3DdD+fVXGGmixfS616jfRVCIO9mwULBZKDDWLv6aFFswzQNCT7wgHNc3TY+u4Um4k8/8AKgHf0GTYVpIOvpY+tIccO9fkuNlJ60utlII8RUsKlJB3DODh7zmLsoF6VZPIeia/8HiANZ9NxYHn06JG3iBBIa4kn3fFQfxR/OiTvpX03Q2MWTXg+PC4dHZnZT5jnsdl5/CYNszjY/ib7+Xms27iUmwNDytebj5ds3O9aKlMP7P9DfHcBjAuMu9La7qb02GiVjhpvTU9MzR8LOqLnxpyAEA2eVjrp+eiUu3Jv8UVYtytjXDYNhNOJB9Qjm4LD/xkf7hp7q1WdbO4aWiI8USD15fk7KbBckPDh8KBYkcfQ6/2oGd8OzBJ6kj47bKuNuYaD1vkVTnrl/5QC8kg6BsVatkv+YV/arRBEQTlk/qH/wCUCycdTaKjxALa19dPwUKd5no4YhWbP7iPshMWxhPgzAdTV/JWT5t609UJ37b1v5/goHvJnDCep+K82FgvNY9ERGwu9OqIewNG2Y87UsFsVdyCSQDXmf8ACuGFHp7/APCvklb/AAt+GvxCqdtYNdd6+ZJUstZwYcE1mC5+jsrcn0+6jDGRqeeyto0pZLKjA3z97v8ACiIWda9+v0XpRoU54Zx+BmHEMmFEngewuzBpOeVsgO12KoHQ+ooAoK2I3Rt/JH2U2yUKvROpeN4K3ZMA0Ag1chJa6ow0gitssh9ZB0pWTdoME5znOwAsm/2gFU1jQdB4vZe4g7l+uyNB6mfL1oOxUn/MO/7Tv72IU8aweeN36A1rWtcHNEpcHuyZWOdmHIkuI5kN6G3PZ3ieGkkeyHCiHwNIcH5nUwkPBc4Wcxe08vZrWgVEgqJ//9k=" 
		alt="guy" className="aboutdiv-img"/>
		<p>I am not "successful" myself, i'm trying, just like you are. In the following tabs there's everything usefull i have to tell you, you might not agree, but i hope it helps.</p>
      	<img src="https://media0.giphy.com/media/dyQykJRTE8guxtLUc5/200_d.gif" alt="imhere" className="aboutdiv-img"/>
      	<p>(Got carried away here)</p>
      </div>
    )
  }
}

export default Me;