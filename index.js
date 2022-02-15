#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Хэн саятан болмоор байна.\n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlack('Хэрхэн тоглох вэ')}
    Би бол someDog-ийн бүтээсэн робот байна.
    Та бүх асуултанд зөв хариулж чадвал би амьд үлдэх болно.
    Хэрэв нэг л асуултанд бүдэрвэл би шууд үхнэ.
    Манжийн дарлалаас намайг гаргаач гуйж байна 🙏🙏🙏
    
    `)
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'someDog таны нэрийг мэдэхийг хүсэж байна.',
        default(){
            return 'Таны нэр'
        },
    });

    playerName = answers.player_name;
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Цэнхэр, шар өнгөний дундаас ямар өнгө гардаг вэ?\n',
        choices: [
            'Шар',
            'Улаан',
            'Ногоон',
            'Цэнхэр'

        ],
    });

    return handleAnswer(answers.question_1 == 'Ногоон');
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: '“Бачим” гэж ямар утгыг илэрхийлж байна вэ?\n',
        choices: [
            'Яаралтай',
            'Бөхчим',
            'Бачимдах',
            'Тийм үг байхгүй'

        ],
    });

    return handleAnswer(answers.question_2 == 'Яаралтай');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Монголын хамгийн сүүлчийн хааны хатан хэн бэ? \n',
        choices: [
            'Бөртэ үжин хатан',
            'Гэнэнпил хатан',
            'Хутугтай хатан',
            'Дондогдулам хатан'

        ],
    });

    return handleAnswer(answers.question_3 == 'Гэнэнпил хатан');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: ' Му-ын төв цэг? \n',
        choices: [
            'Архангай аймаг',
            'Булган аймаг',
            'Төв аймаг',
            'Өвөрхангай аймаг'

        ],
    });

    return handleAnswer(answers.question_4 == 'Өвөрхангай аймаг');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'Хулгана цаг хэдээс хэдэн цаг вэ?\n',
        choices: [
            '03:40 – 05:40',
            '01:40 – 03:40',
            '23:40 – 01:40',
            '21:40 – 23:40'

        ],
    });

    return handleAnswer(answers.question_5 == '23:40 – 01:40');
}

async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'Чингис хааны бага хатны нэр? \n',
        choices: [
            'Ихиржин хатан',
            'Төгс хатан',
            'Хулан хатан',
            'Турхал хатан'

        ],
    });

    return handleAnswer(answers.question_6 == 'Хулан хатан');
}

async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: `
        Ийм л явж эс чадвал
        Эцэг чинь хожим нь
        Булшин доороо ч даарна шүү үр минь ээ
        Хэний бичсэн шүлгийн хэсэг вэ?
        `,
        choices: [
            'Чойном',
            'Нацагдорж',
            'Лхагвасүрэн',
            'Явуухулан'

        ],
    });

    return handleAnswer(answers.question_7 == 'Лхагвасүрэн');
}

async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'Богдхан уул хэдэн амтай вэ?\n',
        choices: [
            '8',
            '16',
            '12',
            '32'

        ],
    });

    return handleAnswer(answers.question_8 == '32');
}

async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: `
        Уг нь би тэднийд агсам тавья гэж очсон юм
        Ухаан ардын дуунд  хүлээтэй байгаад чадсангүй
        гэж ямар шүлгийн хэсэг вэ ?
        `,
        choices: [
            'Хүн',
            'Жаргал зовлон',
            'Хүүдээ зориулсан захидал',
            'Хуримын зар'
        ],
    });

    return handleAnswer(answers.question_9 == 'Хуримын зар');
}

async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'Далайн хавч ямар цустай вэ?\n',
        choices: [
            'Цэнхэр',
            'Цагаан',
            'Өнгөгүй',
            'Улаан'

        ],
    });

    return handleAnswer(answers.question_10 == 'Цэнхэр');
}
async function handleAnswer(isCorrect) {
    const spinner = createSpinner('someDog таны асуултыг шалгаж байна...').start();
    await sleep();

    if(isCorrect){
        spinner.success({ text: `${playerName} танд баярлалаа. Робот намайг манжийн дарлалаас гаргахад хэдхэн асуулт үлдлээ. 😊 😊 😊` })
    } else {
        spinner.error({ text: `💀💀💀 Робот харамсалтайгаар someDog-ийн гарт амь үрэгдлээ, ${playerName} та түүнд тусалж чадсангүй 😱 😱 😱` });
        process.exit(1);
    }
}

function winner () {
    console.clear();
    const msg = `${playerName}  tand  bayrlalaa,  bayr  hurgie \n \nnamaig  manjiin  darlalaas  gargaj  chadlaa`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
await winner();

