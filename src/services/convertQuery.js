

export default function convertQuery(query){
    var newQuery=query;
    var wordArray=[];
    if(query.indexOf(' ')){
      wordArray=query.split(" ");
      newQuery = wordArray.join('+');
    }
    return newQuery;
}