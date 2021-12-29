Search.setIndex({docnames:["index","modules","vlkit","vlkit.datasets","vlkit.dense","vlkit.geometry","vlkit.image","vlkit.io","vlkit.lrscheduler","vlkit.models","vlkit.nms","vlkit.ops","vlkit.plt","vlkit.pytorch","vlkit.transforms"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules.rst","vlkit.rst","vlkit.datasets.rst","vlkit.dense.rst","vlkit.geometry.rst","vlkit.image.rst","vlkit.io.rst","vlkit.lrscheduler.rst","vlkit.models.rst","vlkit.nms.rst","vlkit.ops.rst","vlkit.plt.rst","vlkit.pytorch.rst","vlkit.transforms.rst"],objects:{"":[[2,0,0,"-","vlkit"]],"vlkit.args":[[2,1,1,"","str2bool"]],"vlkit.datasets":[[3,0,0,"-","datasets"],[3,0,0,"-","filelist"]],"vlkit.datasets.datasets":[[3,2,1,"","CACDDataset"],[3,2,1,"","FileListDataset"],[3,1,1,"","cifar10"],[3,1,1,"","cifar100"],[3,1,1,"","ilsvrc2012"],[3,1,1,"","svhn"]],"vlkit.datasets.filelist":[[3,2,1,"","FileListDataset"]],"vlkit.datasets.filelist.FileListDataset":[[3,3,1,"","num_classes"]],"vlkit.dense":[[4,0,0,"-","dense"]],"vlkit.dense.dense":[[4,1,1,"","angle2flux"],[4,1,1,"","dense2flux"],[4,1,1,"","dequantize_angle"],[4,1,1,"","flux2angle"],[4,1,1,"","quantize_angle"],[4,1,1,"","seg2edge"],[4,1,1,"","sobel"]],"vlkit.detection":[[2,1,1,"","bbox2mask"],[2,1,1,"","box_coverage"],[2,1,1,"","visualize_bboxes"]],"vlkit.geometry":[[5,0,0,"-","distance_transform"]],"vlkit.geometry.distance_transform":[[5,1,1,"","distance_transform"]],"vlkit.image":[[6,0,0,"-","image"]],"vlkit.image.image":[[6,1,1,"","gray2rgb"],[6,1,1,"","hwc2nchw"],[6,1,1,"","isimg"],[6,1,1,"","norm01"],[6,1,1,"","norm255"],[6,1,1,"","overlay"],[6,1,1,"","traverse_folder"]],"vlkit.imagenet_labels":[[2,1,1,"","imagenet_labels"]],"vlkit.io":[[7,0,0,"-","bytes"],[7,0,0,"-","pickle"]],"vlkit.io.bytes":[[7,1,1,"","array2bytes"],[7,1,1,"","bytes2array"],[7,1,1,"","bytes2image"],[7,1,1,"","bytes2image2array"],[7,1,1,"","image2bytes"]],"vlkit.io.pickle":[[7,1,1,"","load_pkl"],[7,1,1,"","save_pkl"]],"vlkit.lrscheduler":[[8,0,0,"-","base"],[8,0,0,"-","cosine"],[8,0,0,"-","step"]],"vlkit.lrscheduler.base":[[8,2,1,"","BaseScheduler"]],"vlkit.lrscheduler.base.BaseScheduler":[[8,4,1,"","get_lr"],[8,4,1,"","step"]],"vlkit.lrscheduler.cosine":[[8,2,1,"","CosineScheduler"]],"vlkit.lrscheduler.cosine.CosineScheduler":[[8,4,1,"","get_lr"]],"vlkit.lrscheduler.step":[[8,2,1,"","MultiStepScheduler"]],"vlkit.lrscheduler.step.MultiStepScheduler":[[8,4,1,"","get_lr"]],"vlkit.models":[[9,0,0,"-","transformer"]],"vlkit.models.transformer":[[9,2,1,"","Attention"],[9,2,1,"","FeedForward"],[9,2,1,"","PreNorm"],[9,2,1,"","Residual"],[9,2,1,"","Transformer"]],"vlkit.models.transformer.Attention":[[9,4,1,"","forward"],[9,5,1,"","training"]],"vlkit.models.transformer.FeedForward":[[9,4,1,"","forward"],[9,5,1,"","training"]],"vlkit.models.transformer.PreNorm":[[9,4,1,"","forward"],[9,5,1,"","training"]],"vlkit.models.transformer.Residual":[[9,4,1,"","forward"],[9,5,1,"","training"]],"vlkit.models.transformer.Transformer":[[9,4,1,"","forward"],[9,5,1,"","training"]],"vlkit.ops":[[11,0,0,"-","distributed"],[11,0,0,"-","divergence"],[11,0,0,"-","drop"],[11,0,0,"-","functional"],[11,0,0,"-","nn"],[11,0,0,"-","non_local"],[11,0,0,"-","scale_grad"]],"vlkit.ops.distributed":[[11,2,1,"","AllGather"],[11,1,1,"","all_gather"]],"vlkit.ops.distributed.AllGather":[[11,4,1,"","backward"],[11,4,1,"","forward"]],"vlkit.ops.divergence":[[11,1,1,"","js_divergence"],[11,1,1,"","js_loss"],[11,1,1,"","kl_divergence"],[11,1,1,"","kl_loss"]],"vlkit.ops.drop":[[11,2,1,"","DropPath"]],"vlkit.ops.drop.DropPath":[[11,4,1,"","extra_repr"],[11,4,1,"","forward"],[11,5,1,"","training"]],"vlkit.ops.functional":[[11,1,1,"","minmax_normalize"]],"vlkit.ops.nn":[[11,2,1,"","ArcFace"],[11,1,1,"","deconv_upsample"],[11,1,1,"","upsample_filter"]],"vlkit.ops.nn.ArcFace":[[11,4,1,"","extra_repr"],[11,4,1,"","forward"],[11,4,1,"","reset_parameters"],[11,5,1,"","training"]],"vlkit.ops.non_local":[[11,2,1,"","NonLocal"]],"vlkit.ops.non_local.NonLocal":[[11,4,1,"","forward"],[11,5,1,"","training"]],"vlkit.ops.scale_grad":[[11,2,1,"","ScaleGrad"],[11,2,1,"","ScaleGradFunc"],[11,1,1,"","scale_grad"]],"vlkit.ops.scale_grad.ScaleGrad":[[11,4,1,"","forward"],[11,5,1,"","training"]],"vlkit.ops.scale_grad.ScaleGradFunc":[[11,4,1,"","backward"],[11,4,1,"","forward"]],"vlkit.plt":[[12,0,0,"-","ticks"]],"vlkit.plt.ticks":[[12,1,1,"","clear_ticks"],[12,1,1,"","clear_xticks"],[12,1,1,"","clear_yticks"]],"vlkit.pytorch":[[13,2,1,"","AverageMeter"],[13,1,1,"","accuracy"],[13,0,0,"-","loss"],[13,1,1,"","save_checkpoint"],[13,0,0,"-","wasserstein"]],"vlkit.pytorch.AverageMeter":[[13,4,1,"","reset"],[13,4,1,"","update"]],"vlkit.pytorch.loss":[[13,2,1,"","FLoss"]],"vlkit.pytorch.loss.FLoss":[[13,4,1,"","forward"],[13,5,1,"","training"]],"vlkit.pytorch.wasserstein":[[13,2,1,"","WassersteinLoss"],[13,2,1,"","WassersteinLossFunction"]],"vlkit.pytorch.wasserstein.WassersteinLoss":[[13,4,1,"","forward"],[13,5,1,"","training"]],"vlkit.pytorch.wasserstein.WassersteinLossFunction":[[13,4,1,"","backward"],[13,4,1,"","forward"]],"vlkit.semseg":[[2,1,1,"","color_encode"],[2,1,1,"","rand_palette"]],"vlkit.transforms":[[14,0,0,"-","compose"],[14,0,0,"-","interpolation"],[14,0,0,"-","npr"],[14,0,0,"-","resize"],[14,0,0,"-","transforms"]],"vlkit.transforms.compose":[[14,2,1,"","RandomChoice"]],"vlkit.transforms.compose.RandomChoice":[[14,4,1,"","forward"],[14,5,1,"","training"]],"vlkit.transforms.interpolation":[[14,1,1,"","get_interp"],[14,1,1,"","get_random_interp"]],"vlkit.transforms.npr":[[14,2,1,"","NPR"]],"vlkit.transforms.npr.NPR":[[14,4,1,"","forward"],[14,5,1,"","training"]],"vlkit.transforms.resize":[[14,2,1,"","Resize"],[14,1,1,"","format_size"],[14,1,1,"","resize"]],"vlkit.transforms.resize.Resize":[[14,4,1,"","forward"],[14,5,1,"","training"]],"vlkit.transforms.transforms":[[14,2,1,"","CoordCrop"]],"vlkit.transforms.transforms.CoordCrop":[[14,4,1,"","forward"],[14,5,1,"","training"]],vlkit:[[2,0,0,"-","args"],[3,0,0,"-","datasets"],[4,0,0,"-","dense"],[2,0,0,"-","detection"],[5,0,0,"-","geometry"],[6,0,0,"-","image"],[2,0,0,"-","imagenet_labels"],[7,0,0,"-","io"],[8,0,0,"-","lrscheduler"],[9,0,0,"-","models"],[10,0,0,"-","nms"],[11,0,0,"-","ops"],[12,0,0,"-","plt"],[13,0,0,"-","pytorch"],[2,0,0,"-","semseg"],[14,0,0,"-","transforms"],[2,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","property","Python property"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:property","4":"py:method","5":"py:attribute"},terms:{"0":[4,6,8,9,11,13,14],"001":14,"01":8,"02":8,"05":8,"06":13,"07567":13,"07698":11,"1":[4,6,7,8,11,13,14],"100":[3,13],"1000":8,"1801":11,"1805":13,"1e":13,"2":[2,4,5,7,8,14],"20":8,"21":2,"224":3,"255":6,"256":3,"2d":11,"3":[4,13],"32":11,"4":[8,14],"4095689":7,"5":[6,11,14],"60":14,"61838233":7,"64":9,"8":[3,4,8,9],"9":4,"boolean":[11,13],"byte":[1,2],"class":[3,8,9,11,13,14],"default":11,"float":[8,14],"function":[1,2,9,13,14],"int":[8,14],"return":[4,5,6,11,13],"static":[11,13],"true":[4,11,13],"while":[9,11,13,14],If:[11,13],It:[11,13],The:[4,11,13],To:11,ab:13,accept:[11,13],accuraci:13,acompani:13,ada_m:11,afterward:[9,11,13,14],all:[6,9,11,13,14],all_gath:11,allgath:11,alpha:6,also:[11,13],although:[9,11,13,14],an:[5,6,11,13,14],angl:4,angle2flux:4,ani:[11,13],ar:11,arbitrari:[11,13],arcfac:11,arg:[1,11,13],argument:[11,13],array2byt:7,arxiv:[11,13],attent:9,attribut:[11,13],autograd:[11,13],averag:13,averagemet:13,ax:12,b:7,back:11,backend:14,backward:[11,13],base:[1,2,3,9,11,13,14],base_lr:8,baseschedul:8,batch:6,bbox2mask:2,bbox:2,befor:11,being:14,berkeleyvis:11,beta:13,between:11,bilinear:[11,14],bin:4,binari:[2,5],blob:11,block:[1,2],bool:[9,11,13,14],both:11,bound:2,box:2,box_coverag:2,bs:3,bytes2arrai:7,bytes2imag:7,bytes2image2arrai:7,c:6,cacddataset:3,call:[9,11,13,14],can:[11,13,14],care:[9,11,13,14],channel:11,checkpoint:13,choos:14,cifar100:3,cifar10:3,clear_tick:12,clear_xtick:12,clear_ytick:12,code:13,color:[2,6],color_encod:2,com:[7,11],compos:[1,2],comput:[4,9,11,13,14],contain:[5,6],content:1,context:[11,13],conv:[1,2],convert:[2,6],coordcrop:14,coordin:5,correspond:[11,13],cosin:[1,2],cosineschedul:8,coverag:2,crop_siz:3,ctx:[11,13],current:13,custom:11,cv2:14,dac:14,data:[3,6,11,13],dataset:[1,2],deconv:11,deconv_upsampl:11,defin:[9,11,13,14],dens:[1,2],dense2flux:4,densiti:4,depth:9,dequantize_angl:4,detailenh:14,detect:1,df:14,dic:7,dict:7,differenti:[11,13],dim:9,dim_head:9,direct:5,dist:5,distanc:5,distance_transform:[1,2],distil:11,distribut:[1,2],diverg:[1,2],doc:14,drop:[1,2],dropout:9,droppath:11,dual_bn:[1,2],dure:[11,13],e:[11,13],each:[4,11,13,14],edgepreservingfilt:14,eg:11,ep:13,epoch:8,epoch_it:8,epoch_s:8,everi:[9,11,13,14],exampl:[5,7,8],extra:11,extra_repr:11,factor:11,fals:[3,4,11],fcn:11,feedforward:9,field:[4,5],file:[6,7],filelist:[1,2],filelistdataset:3,filenam:13,find:6,first:[11,13],fix:11,floss:13,flux2angl:4,flux:4,fmeasur:13,fn:9,folder:6,follow:[11,13],format_s:14,former:[9,11,13,14],formula:[11,13],forward:[9,11,13,14],from:7,g:[11,13],gamma:8,geometri:[1,2],get_interp:14,get_lr:8,get_random_interp:14,github:11,given:[4,6,11,13],gm:13,grad:[11,13],grad_list:11,grad_output:[11,13],gradient:[11,13],gray2rgb:6,group__photo__rend:14,gt:2,h:[2,4,5,6,11],ha:[11,13],have:[11,13],head:9,here:5,hidden_ch:11,hidden_dim:9,hold_epoch:8,hold_it:8,hook:[9,11,13,14],html:14,http:[7,11,13,14],hwc2nchw:6,ignor:[9,11,13,14],ilsvrc2012:3,im:14,imag:[1,2,7,14],image2byt:7,imagenet_label:1,img:[6,14],implement:11,in_ch:11,in_featur:11,index:0,inform:[7,11],input:[4,6,11,13],instanc:[9,11,13,14],instead:[9,11,13,14],interpol:[1,2],invers:[4,11],io:[1,2],is_best:13,isimg:6,iter:8,jensen:11,js:11,js_diverg:11,js_loss:11,just:[11,13],k:13,kernel:11,kernel_s:4,kl:11,kl_diverg:11,kl_loss:11,kwarg:[8,9,11,13],label:[11,13],labelmap:2,last_epoch:8,latter:[9,11,13,14],learn:8,level:4,line:11,list:[6,8,14],load:7,load_pkl:7,locat:4,loss:[1,2,11],lr:8,lr_schedul:8,lrschedul:[1,2],m:[11,13],make:11,mani:[11,13],map:[4,5],mask:[2,6,9],master:11,matrix:[4,5],max_it:13,max_lr:8,method:[11,14],mileston:8,min_lr:8,minmax_norm:11,mlp_dim:9,model:[1,2],modul:[0,1],multi:11,multistep:8,multistepschedul:8,must:[11,13],n:[6,8,13,14],ndarrai:[5,6,7],nearest:5,need:[9,11,13,14],needs_input_grad:[11,13],nm:[1,2],nms_ext:[1,2],nn:[1,2,9,13,14],noic:8,noice_std:8,non:[11,13,14],non_loc:[1,2],none:[2,3,8,9,11,13,14],nonloc:11,norm01:6,norm255:6,normal:[4,6,11],np:5,npr:[1,2],num_bin:4,num_class:[2,3],num_work:3,number:[4,11,13,14],numitermax:13,numpi:[6,7],object:[7,8,13],often:11,one:[9,11,13,14],op:[1,2],opencv:14,oper:[11,13],option:[8,14],org:[11,13,14],orient:4,other:[11,13],out_featur:11,output:[4,11,13],overlai:6,overridden:[9,11,13,14],own:11,p:[11,14],p_choic:14,packag:1,page:0,paper:13,paramet:[5,7,11,13,14],pass:[9,11,13,14],path:[3,6,7,11,13],pdf:11,pencilsketch:14,per:11,perform:[9,11,13,14],photorealist:14,pickl:[1,2],pil:[7,14],pixel:4,pkl:7,plt:[1,2],point:5,posit:4,precis:13,predict:13,prenorm:9,print:[7,11],probabl:[11,14],propag:11,properti:3,pth:13,py:11,python:7,pytorch:[1,2],q:4,quantiz:4,quantize_angl:4,r:[2,11,13],rand_palett:2,random:14,randomchoic:14,randomli:11,rang:6,rate:8,re:11,recip:[9,11,13,14],red:2,refer:[7,11],reg:13,regist:[9,11,13,14],render:14,repres:[4,11,13],represent:11,represet:2,requir:[11,13],reset:13,reset_paramet:11,residu:9,resiz:[1,2],restart:8,restart_decai:8,retriev:[11,13],return_affin:11,return_m:11,root:3,root_dir:3,run:[9,11,13,14],s:11,same:6,sampl:11,save:[7,11,13],save_checkpoint:13,save_pkl:7,scale:11,scale_grad:[1,2],scalegrad:11,scalegradfunc:11,schedul:8,search:0,see:[5,14],seg2edg:4,seg:4,select:14,semseg:1,set:11,shannon:11,shape:[4,7],shelham:11,should:[9,11,13,14],sigma_:14,sigma_r:14,silent:[9,11,13,14],similar:11,sinc:[9,11,13,14],singl:11,size:[2,6,11,14],sobel:4,softmax:11,sourc:[2,3,4,5,6,7,8,9,11,12,13,14],specif:14,specifi:13,squeeze_excit:[1,2],stackoverflow:7,state:13,step:[1,2,14],store:[11,13],str2bool:2,str:14,stride:11,string:[11,14],style:6,styliz:14,subclass:[9,11,13,14],submodul:1,subpackag:1,suitabl:11,sum:11,surgeri:11,svhn:3,t:[2,11,13],take:[9,11,13,14],target2indic:3,target:[7,13,14],tensor:[4,11,13],tensor_list:11,them:[9,11,13,14],thi:[9,11,13,14],thin:4,tick:[1,2],topk:13,torch:[3,9,11,13,14],train:[9,11,13,14],transform:[1,2,3,5],travers:6,traverse_fold:6,tupl:[5,11,13,14],type:[4,5,11,13,14],updat:13,upsampl:11,upsample_filt:11,us:[11,13,14],util:[1,3],v:2,val:13,valu:[11,13],vector:[4,5,11],visualize_bbox:2,w:[2,4,5,6,11,13],warmup:8,warmup_epoch:8,warmup_init_lr:8,warmup_it:[8,11],wasserstein:[1,2],wassersteinloss:13,wassersteinlossfunct:13,weight:13,were:[11,13],when:11,whether:[11,13],which:11,width:2,within:[9,11,13,14],x1:[2,14],x2:[2,14],x:[4,5,6,9,11,14],y1:[2,14],y2:[2,14],y:11,you:[11,13],your:11,yx:5,zero:11},titles:["Welcome to vlkit\u2019s documentation!","vlkit","vlkit package","vlkit.datasets package","vlkit.dense package","vlkit.geometry package","vlkit.image package","vlkit.io package","vlkit.lrscheduler package","vlkit.models package","vlkit.nms package","vlkit.ops package","vlkit.plt package","vlkit.pytorch package","vlkit.transforms package"],titleterms:{"byte":7,"function":11,arg:2,base:8,block:11,compos:14,content:[2,3,4,5,6,7,8,9,10,11,12,13,14],conv:11,cosin:8,dataset:3,dens:4,detect:2,distance_transform:5,distribut:11,diverg:11,document:0,drop:11,dual_bn:11,filelist:3,geometri:5,imag:6,imagenet_label:2,indic:0,interpol:14,io:7,loss:13,lrschedul:8,model:9,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14],nm:10,nms_ext:10,nn:11,non_loc:11,npr:14,op:11,packag:[2,3,4,5,6,7,8,9,10,11,12,13,14],pickl:7,plt:12,pytorch:13,resiz:14,s:0,scale_grad:11,semseg:2,squeeze_excit:11,step:8,submodul:[2,3,4,5,6,7,8,9,10,11,12,13,14],subpackag:2,tabl:0,tick:12,transform:[9,14],util:2,vlkit:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],wasserstein:13,welcom:0}})