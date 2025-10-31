import { getConnection } from '../config/db.js';


const buyerData = async(
    userId,
    projectName,
    projectDescription,
    projectImage,
    verifiedBy,
    vintageYear,
    country,
    address,
    projectType,
    mechanism,
    methodology,
    character,
    company,
    registry,
    validator,
    validationDate,
    projectImpact,
    carbonPrice,
    availableQuantity,
    sdgCount,
    certificationValidUntil,
    question,
    answers
      




) =>{
   const client = await getConnection();
   const result = await client.query(
  'SELECT * FROM dbo.fn_insert_project_buyer_data($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ,$11 ,$12 ,$13 ,$14 ,$15 ,$16 ,$17 ,$18 ,$19 ,$20 ,$21 ,$22 ,$23 )',[
     userId,
    projectName,
    projectDescription,
    projectImage,
    verifiedBy,
    vintageYear,
    country,
    address,
    projectType,
    mechanism,
    methodology,
    character,
    company,
    registry,
    validator,
    validationDate,
    projectImpact,
    carbonPrice,
    availableQuantity,
    sdgCount,
    certificationValidUntil,
    question,
    answers
      
  ]
);

  return result.rows[0];

}




export { buyerData };