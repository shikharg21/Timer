
$(() => {
    let Inhrs = $('#ex1').val(0)
    let Inmin = $('#ex2').val(0)
    let Insec = $('#ex3').val(0)

    let total = 0
    let curr = 0
    const start = $('#strt')
    const stop = $('#stp')
    const rst = $('#rst')

    let dum = true

    start.click(() => {
        if (dum) {
            Inhrs = parseInt($('#ex1').val())
            Inmin = parseInt($('#ex2').val())
            Insec = parseInt($('#ex3').val())
            total = (Inhrs * 3600 + Inmin * 60 + Insec)
            curr = total + 1
        } else {
            Inhrs = parseInt($('#hrs').html())
            Inmin = parseInt($('#mins').html())
            Insec = parseInt($('#secs').html())
        }
        intervalControl(Inhrs, Inmin, Insec)
    })
    function intervalControl(Inhrs, Inmin, Insec) {
        if (Inmin > 59 || Insec > 59) {
            alert('FUCK YOU BITCH!!')
        }
        const myinterval = setInterval(() => {
            $('#hrs').html(Inhrs)
            $('#mins').html(Inmin)
            $('#secs').html(Insec);

            stop.click(() => {
                dum = false
                clearInterval(myinterval)
            })

            Insec = Insec - 1;
            curr--

            let areaval = (Number(curr / total).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }))
            $('#prog').html(areaval)
            $('#prog').attr('style', 'width:areaval')
            if (Insec < 0) {
                Inmin--
                Insec = 59
            } if (Inmin < 0) {
                Inhrs--
                Inmin = 59
                Insec = 59
            } if (Inhrs < 0) {
                clearInterval(myinterval)
                alert('TIME UP BITCH!!!!!')
            }
        }, 1000)
    }

    rst.click(() => {
        location.reload()
    })
})


