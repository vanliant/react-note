### prop-types

---

1. ##### prop-types，对组件标签属性进行限制

   ```javascript
   //对标签属性进行类型、必要性的限制
   		Person.propTypes = {
   			name:PropTypes.string.isRequired, //限制name必传，且为字符串
   			sex:PropTypes.string,//限制sex为字符串
   			age:PropTypes.number,//限制age为数值
   			speak:PropTypes.func,//限制speak为函数
   		}
   		//指定默认标签属性值
   		Person.defaultProps = {
   			sex:'男',//sex默认值为男
   			age:18 //age默认值为18
   		}
   ```

   ###### 限制类型

   ```javascript
   Person.propTypes = {
   			name:PropTypes.string.isRequired, //限制name必传，且为字符串
   			sex:PropTypes.string,//限制sex为字符串
   			age:PropTypes.number,//限制age为数值
   		}
   ```

   

