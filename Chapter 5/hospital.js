function hospital(args) {
    let days = Number(args[0]);
    let doctors = 7;
    let treated = 0;
    let untreated = 0;

    for (let currentDay = 1; currentDay <= days; currentDay++)
    {
        let patients = Number(args[currentDay]);

        if (currentDay % 3 == 0) {
            if (untreated > treated) {
                doctors++;
            }
        }

        if (patients <= doctors) {
            treated = treated + patients;
        }
        else {
            treated = treated + doctors;
            untreated = untreated + (patients - doctors);
        }
    }
    
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}


hospital(["3", "7", "7", "7"]);
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);

