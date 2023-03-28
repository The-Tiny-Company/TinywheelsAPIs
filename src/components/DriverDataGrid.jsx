import React from 'react'
import axios from 'axios'
import {Table , Popconfirm ,Button,Space,Form,Input} from 'antd'
import {isEmpty} from 'lodash';
import { useState,useEffect } from 'react';
import { Trash3,PencilSquare,XLg,CloudDownload,PlusLg} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function DriverDataGrid({title}) {

    const [gridData,setGridData] = useState([])
    const [loading,setLoading] = useState(false)
    const [editingKey,setEditingKey] = useState("")
    const [sortedInfo,setSortedInfo] = useState({})
    const [form] = Form.useForm()
    const [searchText,setSearchText] = useState("")
    let [filteredData] = useState()

  const loadVehiculeData=async()=>{
      setLoading(true)
      const res = await axios.get("http://localhost:8080/api/v1/drivers")
      setGridData(res.data)
      console.log(res.data)
      setLoading(false)
    }

  // const loadData= async ()=>{
  //   setLoading(true)
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  //   setGridData(res.data)
  //   setLoading(false)
  // }

  useEffect(()=>{
    //loadData()
    loadVehiculeData()
  },[])

  //this gonna be changed with the axios DELETE Method 
  const handleDelete=async (val)=>{
    await axios.delete("http://localhost:8080/api/v1/drivers/"+val.id)
    loadVehiculeData()
  }


  
  const modifiedData = gridData.map(({body,...item})=>({
    ...item,
    key : item.id,
    comment : isEmpty(body) ? item.comment : body
  }))

  

  const edit = (record)=>{
    form.setFieldsValue({
      name :"",
      email : "",
      phone : "",
      ...record
    })
    setEditingKey(record.key)
  }

  const cancel = ()=>{
    setEditingKey("")
  }

  const save =async (key)=>{
    try{
      const row = await form.validateFields()
      const newData = [...modifiedData]
      const index = newData.findIndex((item)=>key === item.key)
      if(index > -1)
      {
        const item = newData[index]
        newData.splice(index,1,{...item,...row})
        console.log(newData[1])
        await axios.put("http://localhost:8080/api/v1/drivers/"+key,newData[1]).then(res=>console.log(res.data)).catch(err=>console.log(err))
        setGridData(newData)
        setEditingKey("")
      }
    }catch(err){
      console.log("Error in Editing ",err)
    }
  }

  const edittableCell = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    ...restProps
  })=>{
      const input = <Input />

      return(
        <td {...restProps}>
          {editing ?
            <Form.Item
            name={dataIndex}
            style={{
              margin : 0
            }}
            rules = {[
              {
                required : true,
                message : `Please Input ${title}`
              },
            ]}
            >
              {input}
            </Form.Item> 
          : children
           }
        </td>
      )
  }

  const cols = [
    {
      title : "ID",
      dataIndex : "id",
    },
    {
      title : "CNE",
      dataIndex : "cne",
      align : "center",
      editable : true,
      sorter : (a,b)=>a.cne.length - b.cne.length,
      sortOrder : sortedInfo.columnKey === 'cne' && sortedInfo.order,
    
    },
    {
    title : "Nom",
    dataIndex : "fullname",
    align : "center",
    editable : true,
    sorter : (a,b)=>a.fullname.length - b.fullname.length,
    sortOrder : sortedInfo.columnKey === 'fullname' && sortedInfo.order,
    },
    {
    title : "Phone",
    dataIndex : "phone",
    align : "center",
    editable : true,
    sorter : (a,b)=>a.phone.length - b.phone.length,
    sortOrder : sortedInfo.columnKey === 'phone' && sortedInfo.order,
    },
    {
        title : "Rating",
        dataIndex : "rating",
        align : "center",
        editable : true,
        sorter : (a,b)=>a.rating.length - b.rating.length,
        sortOrder : sortedInfo.columnKey === 'rating' && sortedInfo.order,
    },
    {
        title : "Date Embauche",
        dataIndex : "starDate",
        align : "center",
        editable : true,
        sorter : (a,b)=>a.starDate.length - b.starDate.length,
        sortOrder : sortedInfo.columnKey === 'starDate' && sortedInfo.order,
    },
    {
        title : "Address",
        dataIndex : "address",
        align : "center",
        editable : true,
        sorter : (a,b)=>a.address.length - b.address.length,
        sortOrder : sortedInfo.columnKey === 'address' && sortedInfo.order,
        render : (_,record)=>{
          return(
            <>
              {record.address.street + " "+record.address.suite+" "+record.address.city+" "+record.address.zipcode}
            </>
          )
        }
        },
    {
    title : "Status",
    dataIndex : "status",
    align : "center",
    editable : true,
    sorter : (a,b)=>a.status.length - b.status.length,
    sortOrder : sortedInfo.columnKey === 'status' && sortedInfo.order,
    render : (_,record)=>{
      return(
        <div className="status">
          <div className={record.status==="DISPONIBLE" ? "dispo" : "ndispo"}>
          {record.status}
          </div>
        </div>    
      )
    }
    },
    {
      title : "Actions",
      dataIndex : "actions",
      align : "center",
      render : (_,record)=>{
        const editable = isEditing(record)
        return modifiedData.length>=1 ?
        (
          <Space>
            <Popconfirm 
            title="Sure to Delete ?"
            onConfirm={()=>{
              handleDelete(record)
            }}
          >
            <Button type='primary' danger ><Trash3 /></Button>
          </Popconfirm>
          {editable ? 
                <span>
                <Space size={'middle'}>
                <Button 
                  onClick={(e)=>{save(record.key)}}
                  type="primary"
                  style={{color : "white" , background:"#40c764" ,border:"1px solid white",marginRight : 8}}
                >
                  <CloudDownload />
                </Button>
                <Popconfirm
                  title="Sure to Cancel ?"
                  onConfirm={()=>{
                    cancel()
                  }}
                >
                  <Button><XLg /></Button>
                </Popconfirm>
                </Space>
              </span>
             : 
                <Button
                onClick={()=>{
                  edit(record)
                }}
                style={{color : "white" , background:"#40c764" ,border:"1px solid white"}}
                type = "primary"
              ><PencilSquare /></Button>
               }
          </Space>
        ):
        null
      } ,
    }
  ]

  // const cols = [
  //   {
  //     title : "ID",
  //     dataIndex : "id",
  //   },
  //   {
  //     title : "Name",
  //     dataIndex : "name",
  //     align : "center",
  //     editable : true,
  //     sorter : (a,b)=>a.name.length - b.name.length,
  //     sortOrder : sortedInfo.columnKey === 'name' && sortedInfo.order,
    
  //   },
  //   {
  //     title : "Email",
  //     dataIndex : "email",
  //     align : "center",
  //     editable : true,
  //     sorter : (a,b)=>a.email.length - b.email.length,
  //     sortOrder : sortedInfo.columnKey === 'email' && sortedInfo.order,
      
  //   },
  //   {
  //     title : "Phone",
  //     dataIndex : "phone",
  //     align : "center",
  //     editable : true,
  //     sorter : (a,b)=>a.phone.length - b.phone.length,
  //     sortOrder : sortedInfo.columnKey === 'phone' && sortedInfo.order,
      
  //   },
  //   {
  //     title : "Actions",
  //     dataIndex : "actions",
  //     align : "center",
  //     render : (_,record)=>{
  //       const editable = isEditing(record)
  //       return modifiedData.length>=1 ?
  //       (
  //         <Space>
  //           <Popconfirm 
  //           title="Sure to Delete ?"
  //           onConfirm={()=>{
  //             handleDelete(record)
  //           }}
  //         >
  //           <Button type='primary' danger ><Trash3 /></Button>
  //         </Popconfirm>
  //         {editable ? 
  //               <span>
  //               <Space size={'middle'}>
  //               <Button 
  //                 onClick={(e)=>{save(record.key)}}
  //                 type="primary"
  //                 style={{color : "white" , background:"#40c764" ,border:"1px solid white",marginRight : 8}}
  //               >
  //                 <CloudDownload />
  //               </Button>
  //               <Popconfirm
  //                 title="Sure to Cancel ?"
  //                 onConfirm={()=>{
  //                   cancel()
  //                 }}
  //               >
  //                 <Button><XLg /></Button>
  //               </Popconfirm>
  //               </Space>
  //             </span>
  //            : 
  //               <Button
  //               onClick={()=>{
  //                 edit(record)
  //               }}
  //               style={{color : "white" , background:"#40c764" ,border:"1px solid white"}}
  //               type = "primary"
  //             ><PencilSquare /></Button>
  //              }
  //         </Space>
  //       ):
  //       null
  //     } ,
  //   }
  // ]
  

  const isEditing=(record)=>{
    return record.key===editingKey
  }

  const mergedCols = cols.map((col)=>{
    if(!col.editable) return col
    return {
      ...col,
      onCell : (record)=>({
        record,
        dataIndex : col.dataIndex,
        title : col.title,
        editing : isEditing(record),
      })
    }
  })

  const handleChange = (...sorter)=>{
    const {order,field} = sorter[2]

    setSortedInfo({columnKey : field , order})
  }

  const handleClear=()=>{
    setSortedInfo({})
    setSearchText("")
    //loadData()
    loadVehiculeData()
  }

  const handleSearch=(e)=>{
    setSearchText(e.target.value)
    console.log(e.target.value)
    if(e.target.value)
    {
      globalSearch()
    }
    if(e.target.value===""){
      loadVehiculeData()
      //loadData()
    }
  }

  const globalSearch=()=>{
    filteredData = modifiedData.filter((value)=>{
      return (
        value.cne.toLowerCase().includes(searchText.toLowerCase()) || 
        value.fullname.toLowerCase().includes(searchText.toLowerCase()) ||
        value.phone.toLowerCase().includes(searchText.toLowerCase()) 
      )
    })
    setGridData(filteredData)
  }
  return (
    <div>
        <div className='Header' >
          <div className="Header__Alis">
          <div className="Header__title">
            Driver
          </div>
          <div className="Header__desc">
            Manage Your Driver's Here
          </div>
          </div>
        <div className="Header__func">
        <div className="Header__func__search">
        <Input
        placeholder='Enter Search Text'
        onChange={handleSearch}
        type="text"
        allowClear
        value={searchText}
        className='SearchInput'
        />
        <Button onClick={handleClear} className='ClearAll'>Clear All</Button>
        </div>
        <Button className='AddDriver' ><Link to='/driver/add'>Add Driver </Link><PlusLg className='PlusIcon'/></Button>
        </div>
      </div>
      <div className="table">

     <Form form={form} component={false}>
     <Table
        components={{
          body : {
            cell : edittableCell,
          }
        }}
        columns={mergedCols}
        loading={loading}
        dataSource={filteredData && filteredData.length ? filteredData : modifiedData}
        onChange={handleChange}
        bordered
       ></Table>
     </Form>
      </div>
    </div>
  )
}

export default DriverDataGrid
