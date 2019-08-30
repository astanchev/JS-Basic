function magicDates(input) {
    let startYear = Number(input.shift());
    let endYear = Number(input.shift());
    let magicNumber = Number(input.shift());

    let dateweight = 0;
    let printed = false;
    let date = new Date(startYear, 0, 1);

    let d10 = 0;
    let d01 = 0;
    let m10 = 0;
    let m01 = 0;
    let y1000 = 0;
    let y0100 = 0;
    let y0010 = 0;
    let y0001 = 0;

    while (date.getFullYear() <= endYear) {

        d10 = Math.floor(date.getDate() / 10);
        d01 = date.getDate() % 10;

        m10 = Math.floor((date.getMonth() + 1) / 10);
        m01 = (date.getMonth() + 1) % 10;

        y1000 = Math.floor(date.getFullYear() / 1000);
        y0100 = Math.floor(date.getFullYear() / 100) % 10;
        y0010 = Math.floor(date.getFullYear() / 10) % 10;
        y0001 = date.getFullYear() % 10;

        dateweight = d10 * (d01 + m10 + m01 + y1000 + y0100 + y0010 + y0001) + d01 * (m10 + m01 + y1000 + y0100 + y0010 + y0001) + m10 * (m01 + y1000 + y0100 + y0010 + y0001) + m01 * (y1000 + y0100 + y0010 + y0001) + y1000 * (y0100 + y0010 + y0001) + y0100 * (y0010 + y0001) + y0010 * (y0001);

        if (dateweight === magicNumber) {
            console.log("" + d10 + d01 + "-" + m10 + m01 + "-" + y1000 + y0100 + y0010 + y0001);

            printed = true;
        }

        date.setDate(date.getDate() + 1);
    }

    if (!printed) {
        console.log("No");
    }
}

magicDates(["2011", "2012", "14"]);