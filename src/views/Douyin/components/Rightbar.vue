<template>
  <div class="right-content">
    <div class="r-item">
      <img class="img-avator" :src="videoInfo.author.avatar_thumb.url_list[0]" alt="">
    </div>
    <div class="r-item">
      <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAByCAMAAACvIeWGAAABYlBMVEX///8AAAABAQH29vYAAAAAAAAAAAAAAAAAAAAAAAD9/f38/Pz5+fn39/f7+/v4+Pj19fX////39/f4+PiysrJUVFT////29vb////////19fX////////z8/PW1tbl5eUtLS319fX29vb19fX////////t7e38/Pz8/Pz7+/u6urqenp6MjIxmZmbd3d2dnZ2/v7/29vb29vb////29vb////////19fX8/Pzx8fH+/v7v7+/8/Pzt7e3p6en5+fnU1NSEhITb29tbW1v////39/f////39/fz8/P////x8fHv7+/q6urq6uro6Oj9/f3k5OTr6+vc3Nz09PTFxcX////09PT////9/f37+/v9/f34+Pj8/Pz5+fn39/fY2Njq6urJycnDw8P19fWsrKzz8/Py8vK7u7tzc3POzs79/f309PTy8vL////r6+vm5ube3t7e3t6fn5/s7Ozj4+Ph4eH9OvJ6AAAAdnRSTlPmAALmBAYPCAoM5ubm5ubmPuPgSy8Y3djXw8G9q6BLIBPVy8jAjn9oXFkyKCIYDg0I5NrUz8y5uaaWh4eCeltRRx4aB9/dyMOlm5GNdW9taWlnTzsqz7WVeXhxZmBPQ0E9OzU0KyonJR8N27Syr3JlXFQgGxIRUnwR+QAABWxJREFUaN7s1ltLG0EYxvHHzrvsIRF3uxATkhIKCYkXGmmaVFI1kFiphSKi4tlaRKWF3vTw/dvVWV9nd2MWZMab/i/DML/MIUMw80z9h1O94Ga4pw/GlFnSPWkwh/wq94TBDE9hafkqbLeOt9vDyyXijycMXroctrePW+3walkZnBPmecJBJcB9+1vtOs+XHPxrYWufxwaVQcjfNA/MC/APNpCqf3o/3cPBy8MfSLVx4E9eNSa5Zw1kV1odSZqP47SL7Bpnk2RksuRXMbnS4Td66J5XMLnqLmXKyHDpdxOP1zsnXu4qHq/5J4tGhnu9iak15aJp1Me0Nq8zZKRdv4wcVesUVd/E9Mp+WkbCJVoIkKuyH7k95ClYIErISLqHyNtGaHWqyNmRIqdgom3kLxhuIXctojTMrh9AU4GvylA2ut6FtrryuWWY3U4fGut3WFZgoia01iRS4djdheZ2pZyAx1VorjpOwPLlgPbkO6LC4wq0VxkzHLsUwkAhSZlhqwYD1awETDSCkUZEEo4X3IKRWnLJEib9O817TQrcKcFIpY4KWxcw1IUlYbnTJzDUidzrGB7AUAMVtmswVM1+CFt2A4Zq2JYC92CoXgIuw1BlhqO75ZRgqO+ORfQc8IcE3IWZCm8TcAVG8sS7BLwCIxXFxwS8ChN5QnxKwOswkDcrxJqE49/xHgw0J4RYt1XYLUN7BfGvvcTLZeB2eZH72lVgsp0daM6bjeBXjgpbzg00VxRRO45NCmy7DWitIKJe3jhWDMe36wg688Rta67NsDzkPWiKD1i8WYyPmP9XO67Ge+3Nidveu45FDMu9/uJBV8U7d/6nazN8v9fuii65IO767Mo7LeH4Xn8tQkuedOcXecF3sHy8/jZvL6uJBFEYgGEO1EyX2g1NiyAoXsCFMQslIOIk6CIkRCMZF9kOE7IIzDCX999Ml1bNSc2J/SfpCuR/gY9zqUNvWrXi8Cq7NLAFO5jXK0srb+DWrNvjgi3MJZ9S5c1canPBDNuSOxehZZ04d6ZswQxzydFXCixXnXuy9Ap2sFtstQorx+SyUJ/chB3Mcl5yvclySHeg7NF6Ejb7dZcSxcEOh8u0E5mCretgv9lfiOVQbuPeNVrC/5qtWkRUDXk4aNz2Npphr9nRcdPIOpxLP5XdaB8Wzc4aRJToYG7LuFywhN0ZUVvKU9OB3GndGzDDstnqmuXSbm/EAxawkAdkUgngTob8gtkVsJWVmpFJXPYdUboQA2ZYypHqXBLB5cbu+I/nSlguWP2WXjnomDhn7B6A5ZiXTdpFl3BvlPLcIpjlox69fNA6Ic7acwV8UB52aZdEv84dKBVJV8JSvrMy6ed/53BW1hWLJWFZ8wmR2G6wzvypYx6wKRjDUs6cXMOyrj52r5S30ACW8n2PbGKNx8uZCxfAcrf75IquoDZzBsKVMJQvyCXRoM0ua+lKGMojc0mKl6xS89wNcAHMN+yWOLEG0yX6BVyGkVy/JPKqLmLT38BlGMudK3qcWqy1VW2TOedt6DKMZXVK/yWp5nEqp/tN3A0AI/ksJcLpZ+ZOChfAIp68mGB3OrJtZhfCWB72kduqSxfDWB59L3bnHeEiGMv7ZzUrYMc3SrgIxrIr+vqgO+FnJFwMY7ndOLDOQ+ACGD+rrPmU+2MEXAhj+aEl3ZVZK/B8AQzkHb1Ga1UaZrlo0N2FcAPBcsWynnclxXhLwGDQ/FnSPBJuCRjJkTr+nBr2fL6/ktjFMJb3RS+3m832wRsvdDGMB53TJpFYq1IwlnM6j2GBGwbmdhs6z0cw3vKwfNE2YLylYZYd7fIBuIFgpgEbEGaZA9xAMKcEi2FoY/Vd/nb0F3OqjBxqRkGFAAAAAElFTkSuQmCC">
      <p class="count">{{digg_count}}</p>
    </div>
    <div  class="r-item">
      <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAByCAMAAACvIeWGAAAB7FBMVEUAAAD+/v7+/v78/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQH6+voAAAAAAAAAAAD29vYBAQEDAwP4+Pj19fX+/v79/f319fX7+/vw8PDy8vLz8/P7+/v09PTc3NwICAj+/v76+vr39/eGhoZ9fX3+/v77+/v+/v7+/v79/f329vbl5eXk5OQAAAAvLy/t7e39/f3+/v7+/v7y8vLx8fH6+vr6+vrt7e36+vr4+Pj29vbk5OTLy8vDw8Pu7u68vLy0tLTt7e2goKDn5+fa2tqNjY3v7+/+/v76+vr4+Pj19fX9/f39/f319fX5+fns7Oz29vb5+fn09PT29vby8vLx8fGnp6ebm5ubm5ttbW1nZ2dDQ0PNzc1CQkIqKir7+/v7+/v7+/v7+/v7+/v6+vrz8/P8/Pzv7+/w8PDo6Ojx8fHo6Ojv7+/09PTt7e339/f19fXW1tb19fXOzs7z8/Ps7Ozk5OTu7u5aWlqwsLDLy8tSUlL9/f3+/v74+Pj6+vr7+/vj4+Pd3d3g4ODn5+fe3t7b29vZ2dnPz8/Dw8PNzc3l5eWlpaXW1tagoKDLy8uWlpZQUFClpaX29vb6+vr39/f5+fn6+vrt7e3j4+Pg4ODq6ur09PTo6Oizs7OwsLDb29utra2zs7OPj4+kjr1PAAAApHRSTlMA5ujoAQUCAwcKDRHoCw8O6BIT6Ojj4OfN6enow6JWFOTHtCIH3tDLxLmtcGUYFenb1s+WkY2EfW9raE5HQj4+NDIsKBkN6eDAvb2wqqmhgn9yZVdMNC4pJR8bGRcSENnXybWsqpuYjoV6d3VybmNeXFFPTkdDOisaGQ4J082/iHVsZWFcW0k/Mi4mISAeFRMREAjd2sCXko1tbGJWUTw6ODgoGb2+DPEAAApESURBVGje1ZmFf9NQEIC5lVJJhQItAzYYGwwZDHd3d3d3d3d3d4d/lMvlvdx778LKGOX34xGyNNfl63d3eU2ydv/VaG8P+YYKEyvLl9AOclQMbjITiT4zV51cMX7csqtjxx05PnnG+UTCpP91KjFnnry6uH+xqgrCUVVVNWzBqCPTnhP9L7KZev74qP6KKEdV34Vjz5D630GH1CdHFxZDiPin9vcbvQrZrN1WbCKxanfRQMrB+/uPP8/oNmKfrxigDt+isd7oe2WGRrcJ2+fIcHVUtY7JhenBevcDRv8ZN5FY2V8fj7AxXGglF4IHKyhemfmHaKU7Y7vGhmqEd9dsrt/fd2wfhf4D3T5j52gs+mjXCFmfyKlQvzPgDJNbp3uGeqoqsFVC+r9+oZCWc0yhi8tQujXkQDe+AnV1aqWjrneQAk6JWgXSCza2RlqleTTQ0B6syY604m39U1vj0m/a75ODNG/cAdKXKOESrIxt551E7rsibqS7PHdmf+KGlZOawN1smnJYo8cxuTz3EXF/feKSEq1UMGA62ursH8vkctwH/QBAuOqN6Bpz/TmktJcxuUx9kSu7mesbVWO73bk5yPlQQC7Xz7O2E9fViTqRwRHn92tdUoaVkiy58d2uL66Ev6ixkxveQb09rUVywF1m+9LxRXdHGpuV5d1EvjQzTudzC9zJoOT4Q5sqcq7mOKdHzt4LLWXZWPEn9OUr5yOundPRbGi95t1EFg0mhN8A2BUipqgd+/DbZLX5pAaYM8MgS+4pKrB10goF3uekBUR/m3Pagng8EkyJvlADzgdmzXJTdlSMGwDHR1YWwssxzqLSWGi6m2Bsui1+aRaSBZi4s4ZD9CePnrK1ksgJJ9v8roLxSlkKjweIMI25VxrO+W2J2/72NHcxUJbCF/ppYanI+y1jlhMtLRaAo4GyEP4EYHoC+4lKi0VO2dzl4XZNnMiucHwnmIWJ3DbV7GREX5o5F5+nI8GPMGJ9RBZ16ijPc9PdErd7YxQqB7nmTMextUw3UTx3bjZPajstYTM7KQMYdoGUbeHkAqCw/B4WaQjgjrJsBHOXejk5Hhfgx3WuMXvbVnLhvW7cmtIBliYtZcr0BAAxIdnXE6J7RT7kl7a9wIAQzJleanelO1nrvWbQzYfwVb/IZal7Go+74B0A4j4h0llOXWwoJzhnOa3AnOnkMHCLQ41Jg6W4oYMhyqoi8lBBkZerXDP4nH90OdMWd92a8vnY25cATrvCouuTvpxY0gj2VxAG6t9P+jZxX28w665/E0abYMr0V+VlXVpA/epONNaNgJjV1b2n9KLAhjFOr289EQR6XSsZ1uEBdwowNrWsyKINBY9GodMYK355XRi4YQUa14SBiUUAnQy9AXNTQZG5tw6DnGYb13lePp9Op/M5r7DImLpK0z0vpwN7jABMKnCgiZMRvmW4AB+SxjDIy6XTKRzZdN6bypfbsMQPZFWgoQThLXGtGWiuBvfSBIamMNcI5qbeD+Jaubg+h9gkjlQKjzNPdwHA1BwePUkRDNRyox8LA4j2loA72UExRUVmcArBbkfPRW4yGfcHAnIjgaQwVsLDcyB/IDD2hdYiVwey+Z4gr8QE+KCoMdTns/5BEokEAZaEbV+dx8NzYBCokxtgU9oMTARbF1clAV4ujKEmTe/CkfAPg8ZAR4cSHZ4C+Jvpg1zjh8QNAsksGrtPwYYK8M2IGv9I0bVK0ATZuaDjcBd/nQOLyZc+0gQdoM+619al81+Ab8saw2HqfXWYu0ZX7zUD51RX+5HFJvgZdrV7ZVIvwPeAXbXY8MeG8U4U1oHSfcN4FOgIANwxwNw24U/Y5YDx4xXt55X0Y8essMZLVTj4V3MuLOVhxLHRxfth4FQdyDuM/TYYD5ytgYgr4QEzgh7d+Np4eusHtp0OAk9HQ+CllYetDAJ9xtVxRP9UTdDeAo+QT6PxQHWLj05edXxUX/f5LcDC5ZOnrRw9DJw64ocdd2rayaX9AGTXYNuLKTP1AcxrBlag4VaLB1+kid+QN1GwLa3ANALwd/qAfC/Ebs4jXCfgPgvggLy3gpHZpAluT/NADVgXDFqNDuXcHnHAjoiA4wwTsu4VCILHAETe6+FwejMiEPUbssRDN6VCMHfXPeu7Uz6S5UtOM2DFnYBzPIARWGLd1Nxd6XrgMrJL+F/ulPdXImAf7w6VmMEq17dAX0lKOVtH3CM7xr94Fjg3zZk2c725GkAY0yJ222Ex5UU/C4SbUWD6Yo26E3LumrQgBawXfpAlTW+1VG/iTFu5zm7uDfLJs3hKaNtZBaWoere4B4FBLOwqH3Oe1bAHbwLvlrfP8sEBt0DNZpq2JBjbK1+rld0W5k1Dzz5P3U371I/BbSVsgbXy2i0Q0bpOF8s5SURVYswWr82jMGfaUtYXhnyPL+5+zcWwl2e12ytD15rCUjm3B4Qkf3KnTVt66f4R6kY+y8K2Ml24pZvrgRuLP7qsOjvbE3zkSQy1OSUswTrZDTXcmpaF8KCVW13ubD4GxKob8BbAbmmZ7LXVEGjJszbmPirg09Yxtk7HWGlS3hKWYCKvboSoljaVeKf75I9X+i1YjkEi0dHkqaYzK4hHHPxSynKXZDJ7PEq0DZbkbDrXMB+Uinwsa72Wvm5LQyYzsBk7mrkSrMuM5LO1obNpbAnJ1zFxZuPrzPz1ssBSWZML++rAfrIn/a1eN2JGRmKZTO+GXHCPJ8CS7Gfbm7QNwvqZVRbbosZc6UwmU70m4EphSQ5ut731I4Cl2VIYy6eeiFS6serVglue7E28DPJqwpBr8QkgYpE7PccNTeDyZD/dnQZtBbduTjkh+g+phIXea5CbKsvl3iYySa/bh+gW/iTOITM3iPW58xqQSw3NiS5L1tLe2Xc0ndiPZrmT5d9bkdrZx8LA9YJbnqylfXRzz0XmzXP0iayXTOeOARZGNreOy2RGFxqa5gG411q8aFekIpa4dU2e4JYnO+g8ogtrrtduAZ9uX4ZwXTt37NKxo9bdcgK5iG0Vl6X9fCfp+WDOZ/eacm3EqyKowd9FGWT26Nq1S6gL86Z7ecFtrTSyEU1shHfaMKVn097a7b0bSyXMbccuXbt369a9ew/CKl0YuUFwW49GttL24UTHgQ+ke/UaPGTIkNmzkYtY5Grs0J5UXsltPTpgKzjSc8ETaQQTtoeZZaifzlyeN/4EzWyEIx3xxPcGI5Z0ualgzoFOlOY2cBnNbIRrPLIHE9bSnT/Vy6nytolLaGYTPJRPD3abqnSgmdPM3LazCZ7Q7OxgbiriDlztcZqZ21Y209UZnupl6Tb2LChdUd6/BddfYN4LbqrSmLNeTuj+zcHkZH5+2FS7pmOWWZe4FRkETjcp7MApfpYrpCvB8dSmgTEfO7FAWUbdynL5IXd6c88xTVMJm2UscSs1+NofB2FpzqgolsFExoHYymZZ3mjR9MlY4lZ28CUKUSuPleQAy1mu9OAvjoBaaa78wkRqxbGSzKPdvx1tgP4EyQsW1ulN7DQAAAAASUVORK5CYII=">
      <p class="count">{{comment_count}}</p>
    </div>
    <div class="r-item">
      <img  class="icon" src="data:image/png;base64,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">
    </div>
    <div class="r-item">
      <div class="music-cover animate">
        <img class="icon" :src="videoInfo.music.cover_thumb.url_list[0]">
      </div>
      <div class="music-notes">
        <img class="note-item item-1  animate" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA5CAMAAABKzSg6AAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAQsUG9Pz58cr2EqCDKwLWmiQW4Ny8sZFNCu6/PR/m4tKup4xxbGdcVjjDtHVHQzSOfWKo5yJUAAABZklEQVRIx+3W2W6DMBAFUDeYQDBbCAQI2Zp9T9v5/39rjRChHpMY1D5UzX3jag62JSRDGsTt7+zhYOqtNFVhjde+SaFI5iouAd/z/nCJHkhi1izh7OzjDGrTlZgLWgJFRyh9fUDk7A3asFRvxa7Qir38e9ZtwajZlI2i5dZxtQZsMLSTCcmjxnRvcbpYhEeR9Ux/s08JjyIbZfwYeafIZrdjqLN5cYyGrEN+jfWe7IcYfbK/zCarxSFi2/Qesz5YlrF1UDLLLy41unLrmGZTyKMvUw2Mr8YJoUyUyJnVuc14E86CAVQylTKNqzIhZ8IVL2W2MGOQPTxmAUUsVmAbQGyuwBaYGQqsgxkVqwgzU5yZklCsGGZD/IfHxGqD2UmciUkiNN0As74uDI3RxmMiCcPHd2i18SyMxA9w1OfdueLCvMFxZhU1Lrpyn6+1V2JwhCKH25sTFlJjHl/Jnexjz6Cef84fPgHYY+AbBZ33DgAAAABJRU5ErkJggg==">
        <img class="note-item item-2  animate" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA5CAMAAABKzSg6AAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAQsUG9Pz58cr2EqCDKwLWmiQW4Ny8sZFNCu6/PR/m4tKup4xxbGdcVjjDtHVHQzSOfWKo5yJUAAABZklEQVRIx+3W2W6DMBAFUDeYQDBbCAQI2Zp9T9v5/39rjRChHpMY1D5UzX3jag62JSRDGsTt7+zhYOqtNFVhjde+SaFI5iouAd/z/nCJHkhi1izh7OzjDGrTlZgLWgJFRyh9fUDk7A3asFRvxa7Qir38e9ZtwajZlI2i5dZxtQZsMLSTCcmjxnRvcbpYhEeR9Ux/s08JjyIbZfwYeafIZrdjqLN5cYyGrEN+jfWe7IcYfbK/zCarxSFi2/Qesz5YlrF1UDLLLy41unLrmGZTyKMvUw2Mr8YJoUyUyJnVuc14E86CAVQylTKNqzIhZ8IVL2W2MGOQPTxmAUUsVmAbQGyuwBaYGQqsgxkVqwgzU5yZklCsGGZD/IfHxGqD2UmciUkiNN0As74uDI3RxmMiCcPHd2i18SyMxA9w1OfdueLCvMFxZhU1Lrpyn6+1V2JwhCKH25sTFlJjHl/Jnexjz6Cef84fPgHYY+AbBZ33DgAAAABJRU5ErkJggg==">
        <img class="note-item item-3  animate" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA5CAMAAABKzSg6AAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAQsUG9Pz58cr2EqCDKwLWmiQW4Ny8sZFNCu6/PR/m4tKup4xxbGdcVjjDtHVHQzSOfWKo5yJUAAABZklEQVRIx+3W2W6DMBAFUDeYQDBbCAQI2Zp9T9v5/39rjRChHpMY1D5UzX3jag62JSRDGsTt7+zhYOqtNFVhjde+SaFI5iouAd/z/nCJHkhi1izh7OzjDGrTlZgLWgJFRyh9fUDk7A3asFRvxa7Qir38e9ZtwajZlI2i5dZxtQZsMLSTCcmjxnRvcbpYhEeR9Ux/s08JjyIbZfwYeafIZrdjqLN5cYyGrEN+jfWe7IcYfbK/zCarxSFi2/Qesz5YlrF1UDLLLy41unLrmGZTyKMvUw2Mr8YJoUyUyJnVuc14E86CAVQylTKNqzIhZ8IVL2W2MGOQPTxmAUUsVmAbQGyuwBaYGQqsgxkVqwgzU5yZklCsGGZD/IfHxGqD2UmciUkiNN0As74uDI3RxmMiCcPHd2i18SyMxA9w1OfdueLCvMFxZhU1Lrpyn6+1V2JwhCKH25sTFlJjHl/Jnexjz6Cef84fPgHYY+AbBZ33DgAAAABJRU5ErkJggg==">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['videoInfo'],
  data () {
    return {
      comment_count: null,
      digg_count: null,
      isopen: true
    }
  },
  created () {
    this.switchNum()
  },
  methods: {
    // 数字转换
    switchNum () {
      this.comment_count = this.commafy(this.videoInfo.statistics.comment_count)
      this.digg_count = this.commafy(this.videoInfo.statistics.digg_count)
      // console.log(this.comment_count, this.digg_count)
    },
    commafy (num) {
      num = num + ''
      var reg = /(\d+)(\d{1})(\d{3})/
      if (reg.test(num)) {
        num = num.replace(reg, '$1.$2w')
      }
      return num
    },
    open () {
      this.$emit('rcomment', this.isopen)
    }
  }
}
</script>

<style lang="scss" scoped>
.right-content {
  width: 1rem;
  display: flex;
  flex-direction: column ;
  .r-item {
    flex: 1;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    margin-top: 0.7rem;
    width: 1rem;
    height: 1rem;
    // font-size: 0;
    .img-avator {
      display: block;
      width: 100%;
      height: 100%;
      border: 1px solid #fff;
      border-radius: 100%;
    }
    .icon {
      //去除行内元素空白间距的问题
      // display: block;
      vertical-align: middle;
      border-radius:50%;
      // height: 100%;
      width: 100%;
    }
    .count {
      margin-top: 3px;
      text-align: center;
      white-space: nowrap;
      width: 0.9rem;
      line-height: 0.2rem;
      margin: 0;
    }
    .music-cover {
      animation: cover-animation 5s linear 0s infinite;
    }
    .music-notes {
      position: relative;
      .note-item {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: -.07rem;
        width: 10px;
        opacity: 0;
      }
      .item-1 {
        animation: note-animation 3s linear 0s infinite;
      }
      .item-2 {
        animation: note-animation 3s linear 1s infinite;
      }
      .item-3 {
        animation: note-animation 3s linear 2s infinite;
      }
    }
  }
}
@keyframes cover-animation {
  0% {
    transform:rotate(0deg)
  }
  100% {
    transform:rotate(360deg)
  }
}
@keyframes note-animation {
  0% {
    opacity: 0;
    transform: translate3D(0,0,0);
  }
  15% {
      opacity: .3;
      transform: translate3D(-10px,0,0) scale(1);
  }
  30% {
      opacity: .5;
      transform: translate3D(-20px,-20px,0) scale(1.1);
  }
  45% {
      opacity: .7;
      transform: translate3D(-30px,-30px,0) scale(1.3);
  }
  60% {
      opacity: 1;
      transform: translate3D(-40px,-40px,0) scale(1.4);
  }
  75% {
      opacity: .7;
      transform: translate3D(-50px,-50px,0) scale(1.5);
  }
  90% {
      opacity: .3;
      transform: translate3D(-60px,-60px,0) scale(1.8);
  }
  100% {
      opacity: 0;
      transform: translate3D(-70px,-70px,0) scale(1.8);
  }
}
</style>
