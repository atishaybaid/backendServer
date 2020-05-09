import Template from "./template.modal.js"
import Ouestion from "../question/question.modal.js"

export const  validateQuestion = (reqQuesId)=>{
    let tempQues= [];
    let invalidQuestion = [];
    var promise = new Promise((resolve,reject)=>{
        reqQuesId.map(async (curr)=>{
            try{
                const ques = await Ouestion.findById(curr).exec();
                if(ques){
                    tempQues.push(curr);
                }
            } catch(error){
                invalidQuestion.push(curr);
            }
            if(tempQues.length + invalidQuestion.length == reqQuesId.length){
                resolve(invalidQuestion);
            } 
        });
    })

    return promise;
}

export const addTemplate = async (req,res)=>{
    const quesId = req.body.questionsId;
    const invaliQuestion = await validateQuestion(quesId);
    if(invaliQuestion.length){
        res.status(400).send({InvalidQuestion : invaliQuestion})
    }else{
        const template = await Template.create({title:req.body.title,questionsId:req.body.questionsId});
        res.status(200).send({msg:"Template Created",template:template});      
    }

    
   
}

export const getTemplate = async (req,res)=>{
    const template = await Template.find({}).exec();
    res.status(200).send({template:template});
}



