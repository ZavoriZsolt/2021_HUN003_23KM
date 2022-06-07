// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {

    var NumberSystemConv = function (AtalakitandoSzam,Mibol,Mibe,KarakterSzam) {
        var i = 0, j, decszam = 18446744073709551615, hatvany = 18446744073709551615;
        var str = '1234';
        var szamjegyek = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var value = '';

        str = AtalakitandoSzam;
        decszam = 0;
        hatvany = 1;
        for (i = str.length; i >= 0 ; i--) {
            for (j = 0; j <= Mibol - 1; j++) {
                if (szamjegyek[j] == AtalakitandoSzam[i]) {
                    decszam += j * hatvany;
                    hatvany *= Mibol;
                }
            }
        }
        console.log(decszam);
        i = 0;
        while (decszam != 0) {
            value = szamjegyek[decszam % Mibe] + value;
            decszam -= (decszam % Mibe);
            decszam /= Mibe;
            i++;
        }
        if (i < KarakterSzam) {
            for (j = 0; j < (KarakterSzam - i) ; j++) {
                value = '0' + value;
            }
        }
        value = Mibe +'#' + value;
        return value;

    };
    
    TcHmi.Functions.registerFunction('NumberSystemConv', NumberSystemConv);
})(TcHmi);