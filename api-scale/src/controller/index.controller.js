import axios from "axios";
import { borderInformation } from "../configs/borderInformations";
import { globalUrl } from "../configs/globalUrl";

class Controller {
  async test(req, res) {
    return res.json({ message: "api is running" });
  }

  async getUser(req, res) {
    // Pegando o query params que esta vindo com o page
    const { page } = req.query;
    // Fazendo uma requisiçao com axios e passando um query params para paginação
    const users = await axios.get(globalUrl.usersUrl, {
      params: { page: page },
    });
    // Formatando o retorno da api usando um loop
    return res.json(users.data);
  }

async getCountries(req, res) {
    // Função de filtragem encontrada no link: https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
    const sort_by = (field, reverse, primer) => {
        const key = primer ?
          function(x) {
            return primer(x[field])
          } :
          function(x) {
            return x[field]
          };
      
        reverse = !reverse ? 1 : -1;
      
        return function(a, b) {
          return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
      }
    
    
    const formatedData = []
    borderInformation.forEach(e => formatedData.push({
        Id: e.Id,
        coutryName: e.coutryName,
        borderCount: e.borders.length,
        borders: e.borders,
        tag: e.tag,
    }))
    const ret = formatedData.sort(sort_by('borderCount', true, parseInt))
    let {page=1} = req.query
    const per_page = 6
    const total = ret.length
    const total_pages = Math.ceil(total/per_page)
    if(page>total_pages)page=total_pages
    const formatedRet = {
      "page": page, 
	"per_page": per_page,
	"total": total,
	"total_pages": total_pages,
  data: ret.splice((per_page*page) - per_page , per_page)
    }
    return res.json(formatedRet)
    
    }

    
}



export default new Controller();
