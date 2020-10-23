let rok = parseInt(prompt('Podaj rok: '));

if (rok % 4 == 0 && rok % 100 != 0 || rok % 400 == 0)
{
    document.write('Rok ' + rok + ' jest przestępny');
}
else
{
    document.write('Rok ' + rok + ' nie jest przestępny');
}