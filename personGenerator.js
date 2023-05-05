const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Светлана",
            "id_3": "Оксана",
            "id_4": "Ольга",
            "id_5": "Екатерина",
            "id_6": "Татьяна",
            "id_7": "Анастасия",
            "id_8": "Евгения",
            "id_9": "Ксения",
            "id_10": "Валерия"
        }
    }`,
    
    professionMale: `{
        "count": 10,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтер",
            "id_4": "Электромонтер",
            "id_5": "Инженер",
            "id_6": "Пилот",
            "id_7": "Спасатель",
            "id_8": "Хирург",
            "id_9": "Боцман",
            "id_10": "Плотник"
        }
    }`,

    professionFemale: `{
        "count": 10,
        "list": {
            "id_1": "Парикмахер",
            "id_2": "Воспитатель",
            "id_3": "Визажист",
            "id_4": "Швея",
            "id_5": "Стюардесса",
            "id_6": "Горничная",
            "id_7": "Секретарь",
            "id_8": "Библиотекарь",
            "id_9": "Продавец",
            "id_10": "Официант"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() { 
        return gender = (this.randomIntNumber(1)) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstNameMaleJson);
        } 
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },

    randomSurname: function() {
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },
    
    randomPatronymic: function(){   
        let name = this.randomValue(this.firstNameMaleJson);
        let ter = name.slice(-1);
        if(this.person.gender == 'Мужчина'){ 
            let result = ter=="а" ?  name.replace(ter, 'ич'): ter=="й"? name.replace(ter, 'евич') : name + 'ович';
            return result;
            }
        
       else {
        let result = ter=="а" ?  name.replace(ter, 'ична'): ter=="й"? name.replace(ter, 'евна') : name + 'овна';
        return result;
    }
        

    },
  
    
    randomBirthDay: function day(){
        let startDate = new Date(1969, 11, 1);
        let endDate = new Date(2001, 0, 31);
        let date = new Date( + startDate + Math.random() * (endDate - startDate))
        let options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
       
       return date.toLocaleString("ru", options)
       
     },
    


    randomProfession: function(){
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.professionMale);
        }
        else {
            return this.randomValue(this.professionFemale);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.year = this.randomBirthDay();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};