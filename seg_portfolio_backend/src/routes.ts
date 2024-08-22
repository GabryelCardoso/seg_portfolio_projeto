//imports
import {Router} from 'express';

//forms
import {CadastrarFormsController} from './controllers/forms/form_v_controller';
import { FormConsController } from './controllers/forms/form_cons_controller';
import { FormConvController } from './controllers/forms/form_conv_controller';
import { FormSegController } from './controllers/forms/form_seg_controller';

import { detailformscontroller } from './controllers/forms/DetailForms_Controller';
import { detailformsconscontroller } from './controllers/forms/DetailFormsCons_Controller';
import { detailformsconvcontroller } from './controllers/forms/DetailFormsConv_Controller';
import { detailformssegcontroller } from './controllers/forms/DetailFormsSeg_Controller';
import { detailformsvcontroller } from './controllers/forms/DetailFormsV_Controller';

import { DeleteFormConsController } from './controllers/forms/DeleteFormCons_Controller';
import { DeleteFormConvController } from './controllers/forms/DeleteFormConv_Controller';
import { DeleteFormSegController } from './controllers/forms/DeleteFormSeg_Controller';
import { DeleteFormVController } from './controllers/forms/DeleteFormV_COntroller';

//Usuario
import { CadastrarAdminController } from './controllers/user/user_admin_controller';
import { AuthUserAdminController } from './controllers/user/AuthUserAdmin_Controller';
import { DetailUserAdminController } from './controllers/user/DetailUserAdmin_Controller';
import { DetailUsersController } from './controllers/user/DetailUsers_Controller';


//Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DeleteUserController } from './controllers/user/DeleteUser_Controller';

const router = Router();
// --ROTAS FORMS--

// formv
//Criar um formulario
router.post('/formv', new CadastrarFormsController().handle)
//exibir formularios
router.get('/formsv', isAuthenticated, new detailformsvcontroller().handle)
//deletar formulario
router.delete('/deleteformv', isAuthenticated, new DeleteFormVController().handle)

//formcons
//Criar um formulario
router.post('/formcons', new FormConsController().handle)
//exibir formularios
router.get('/formscons', isAuthenticated, new detailformsconscontroller().handle)
//deletar formulario
router.delete('/deleteformcons', isAuthenticated, new DeleteFormConsController().handle)

//formconv
//Criar um formulario
router.post('/formconv', new FormConvController().handle)
//exibir formularios
router.get('/formsconv', isAuthenticated, new detailformsconvcontroller().handle)
//deletar formulario
router.delete('/deleteformconv', isAuthenticated, new DeleteFormConvController().handle)

//formseg
router.post('/formseg', new FormSegController().handle)
router.get('/formsseg', isAuthenticated, new detailformssegcontroller().handle)
router.delete('/deleteformseg', isAuthenticated, new DeleteFormSegController().handle)
//cadastrararuser
router.post('/cadastraruser', new CadastrarAdminController().handle)

//logarUser

router.post('/session', new AuthUserAdminController().handle)
//detalhes usuarios

router.get('/usuarioinfo', isAuthenticated, new DetailUserAdminController().handle)

//detalhes dos formularios
router.get('/mostrarformularios', isAuthenticated, new detailformscontroller().handle )

//listar usuarios
router.get('/mostrarusuarios', isAuthenticated, new DetailUsersController().handle )

//Deletar usuario
router.delete('/deletarusuario', isAuthenticated, new DeleteUserController().handle)
export {router}