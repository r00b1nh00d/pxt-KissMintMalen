
/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */


/**
 * Benutzerdefinierte Blöcke
 */
//% color=#F99A1C 
namespace KissMintMalen {
    pins.setPull(DigitalPin.C17, PinPullMode.PullUp)
    pins.setPull(DigitalPin.C16, PinPullMode.PullUp)

    let wertB_alt = 0
    let wertA_alt = 0
    let wertB_neu = 0
    let wertA_neu = 0
    let j = 0
    let value = 0
    let i = 0

    /** 
       */
    //% block
    //% blockId="Links" block="Links" | value %value | "
    function Links(value: number) {
        i = 0
        j = 0
        while (i < value && j < value) {
            wertA_neu = pins.digitalReadPin(DigitalPin.C16)
            if (i < value) {
                KissMintMotor.DigitalMotor(MyMotor.A, Richtung.V)
                if (wertA_alt != wertA_neu) {
                    wertA_alt = wertA_neu
                    i += 1
                    serial.writeLine("i=" + i)
                }
            }
            wertB_neu = pins.digitalReadPin(DigitalPin.C17)
            if (j < value) {
                KissMintMotor.DigitalMotor(MyMotor.B, Richtung.V)
                if (wertB_alt != wertB_neu) {
                    wertB_alt = wertB_neu
                    j += 1
                    serial.writeLine("j=" + j)
                }
            }
        }
        KissMintMotor.DigitalMotor(MyMotor.A, Richtung.O)
        KissMintMotor.DigitalMotor(MyMotor.B, Richtung.O)
    }


    /** 
         */
    //% block
    //% blockId="Rechts" block="Rechts" | value %value | "

    function Rechts() {
        i = 0
        j = 0
        while (i < value && j < value) {
            wertA_neu = pins.digitalReadPin(DigitalPin.C16)
            if (i < value) {
                KissMintMotor.DigitalMotor(MyMotor.A, Richtung.R)
                if (wertA_alt != wertA_neu) {
                    wertA_alt = wertA_neu
                    i += 1
                    serial.writeLine("i=" + i)
                }
            }
            wertB_neu = pins.digitalReadPin(DigitalPin.C17)
            if (j < value) {
                KissMintMotor.DigitalMotor(MyMotor.B, Richtung.R)
                if (wertB_alt != wertB_neu) {
                    wertB_alt = wertB_neu
                    j += 1
                    serial.writeLine("j=" + j)
                }
            }
        }
        KissMintMotor.DigitalMotor(MyMotor.A, Richtung.O)
        KissMintMotor.DigitalMotor(MyMotor.B, Richtung.O)
    }

    function Hoch() {
        i = 0
        j = 0
        while (i < value && j < value) {
            wertA_neu = pins.digitalReadPin(DigitalPin.C16)
            if (i < value) {
                KissMintMotor.DigitalMotor(MyMotor.A, Richtung.V)
                if (wertA_alt != wertA_neu) {
                    wertA_alt = wertA_neu
                    i += 1
                    serial.writeLine("i=" + i)
                }
            }
            wertB_neu = pins.digitalReadPin(DigitalPin.C17)
            if (j < value) {
                KissMintMotor.DigitalMotor(MyMotor.B, Richtung.R)
                if (wertB_alt != wertB_neu) {
                    wertB_alt = wertB_neu
                    j += 1
                    serial.writeLine("j=" + j)
                }
            }
        }
        KissMintMotor.DigitalMotor(MyMotor.A, Richtung.O)
        KissMintMotor.DigitalMotor(MyMotor.B, Richtung.O)
    }
    function Runter() {
        i = 0
        j = 0
        while (i < value && j < value) {
            wertA_neu = pins.digitalReadPin(DigitalPin.C16)
            if (i < value) {
                KissMintMotor.DigitalMotor(MyMotor.A, Richtung.R)
                if (wertA_alt != wertA_neu) {
                    wertA_alt = wertA_neu
                    i += 1
                    serial.writeLine("i=" + i)
                }
            }
            wertB_neu = pins.digitalReadPin(DigitalPin.C17)
            if (j < value) {
                KissMintMotor.DigitalMotor(MyMotor.B, Richtung.V)
                if (wertB_alt != wertB_neu) {
                    wertB_alt = wertB_neu
                    j += 1
                    serial.writeLine("j=" + j)
                }
            }
        }
        KissMintMotor.DigitalMotor(MyMotor.A, Richtung.O)
        KissMintMotor.DigitalMotor(MyMotor.B, Richtung.O)
    }



} 