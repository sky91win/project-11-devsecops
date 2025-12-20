module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.15.3"

  cluster_name    = "project8-eks"
  cluster_version = "1.29"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  # 🔐 kubectl access from laptop
  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = true

  # ❌ Disable KMS & custom encryption
  create_kms_key             = false
  create_cloudwatch_log_group = false
  cluster_encryption_config  = {}

  eks_managed_node_groups = {
    default = {
      desired_size   = 1
      min_size       = 1
      max_size       = 1
      instance_types = ["t3.micro"]
    }
  }
}
